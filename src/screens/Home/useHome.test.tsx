import { renderHook, act } from '@testing-library/react-hooks';
import { useHome } from './useHome';

describe('useHome', () => {
    it('should initialize state correctly', () => {
        const { result } = renderHook(() => useHome());

        expect(result.current.bottomSheetRef.current).toBeNull();
        expect(result.current.fdBacks).toEqual([]);
        expect(result.current.currentUser).toBeDefined();
        expect(result.current.currentTab).toEqual(0);
        expect(result.current.topInset).toBeGreaterThan(0);
        expect(result.current.bottomInset).toBeGreaterThan(0);
        expect(result.current.feedbacksCurrentUser).toEqual([]);
    });

    it('should handle opening the bottom sheet modal', () => {
        const { result } = renderHook(() => useHome());

        act(() => {
            result.current.handleOpenModal();
        });

        expect(result.current.bottomSheetRef.current?.isVisible()).toBe(true);
    });

    it('should handle giving feedback', () => {
        const { result } = renderHook(() => useHome());

        act(() => {
            result.current.handleGive({
                selectedUser: 'someUser',
                amount: 5,
                message: 'Great work!'
            });
        });

        expect(result.current.fdBacks).toHaveLength(1);
        expect(result.current.fdBacks[0].receiverId).toBeDefined();
        expect(result.current.fdBacks[0].senderId).toBeDefined();
        expect(result.current.fdBacks[0].message).toEqual('Great work!');
        expect(result.current.fdBacks[0].amount).toEqual(5);
    });
});

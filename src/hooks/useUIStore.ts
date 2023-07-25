import {
  useAppDispatch,
  useAppSelector,
} from '../store'
import { onCloseDateModal, onOpenDateModal } from '../store/ui';

export const useUiStore = () => {

  const { isDateModalOpen } = useAppSelector( state => state.ui );
  const dispatch = useAppDispatch();

  const openDateModal = () => {
    dispatch( onOpenDateModal() );
  };

  const closeDateModal = () => {
    dispatch( onCloseDateModal() );
  };

  return {
    isDateModalOpen,
    openDateModal,
    closeDateModal,
  };
};

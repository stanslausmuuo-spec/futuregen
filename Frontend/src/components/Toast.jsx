import { useApp } from '../context/AppContext';

export default function Toast() {
  const { toast } = useApp();
  return (
    <div className={`toast${toast.visible ? ' visible' : ''}`} id="toast">
      {toast.message}
    </div>
  );
}

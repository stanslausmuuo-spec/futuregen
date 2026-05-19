import { useApp } from '../context/AppContext';
import Icon from './Icon';

export default function PasswordInput({ id, form, placeholder }) {
  const { passVisible, togglePassword } = useApp();
  const isVisible = passVisible[form];

  return (
    <div className="input-group">
      <label>Password</label>
      <input
        type={isVisible ? 'text' : 'password'}
        placeholder={placeholder || '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022'}
        id={id}
      />
      <span className="toggle-password" onClick={() => togglePassword(form)}>
        <Icon name={isVisible ? 'EyeOff' : 'Eye'} size={18} />
      </span>
    </div>
  );
}

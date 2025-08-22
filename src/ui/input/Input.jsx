import { useId } from 'react';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

import appSelectors from '@/redux/app/appSelectors';

import s from './input.module.css';

function Input({
  type = 'text',
  id,
  placeholder = '',
  value,
  onChange = () => {},
  onClick = () => {},
  onBlur = () => {},
  autoComplete = 'off',
  minLength = 0,
  maxLength = 1024,
  readOnly = false,
  disabled = false,
  pattern = '',
}) {
  const inputId = useId();

  const i18n = useSelector(appSelectors.translation);

  const handleChange = (e) => {
    const etv = e.target.value;

    if (!pattern) {
      onChange(etv);
      return;
    }

    if (pattern === '12345.12') {
      const str = etv.includes(',') ? etv.replace(',', '.') : etv;
      const val = str.startsWith('0') ? str.slice(1) : str;

      if (/^[0-9]{0,5}[.]?[0-9]{0,2}$/.test(val) && Number(val) < 99999.99)
        onChange(val);
      else Notify.warning(`${i18n.Формат_данных} ${pattern}`);
    }

    if (pattern === '12345') {
      const val = etv.startsWith('0') ? etv.slice(1) : etv;

      if (/^[0-9]{0,5}$/.test(val)) onChange(val);
      else Notify.warning(`${i18n.Формат_данных} ${pattern}`);
    }

    if (pattern === '1234567890123456') {
      const val = etv.startsWith('0') ? etv.slice(1) : etv;

      if (/^[0-9]{0,16}$/.test(val)) onChange(val);
      else Notify.warning(`${i18n.Формат_данных} ${pattern}`);
    }

    if (pattern === 'email') onChange(etv);
  };

  const handleBlur = () => {
    if (pattern === '12345.12') {
      if (value === '.') onChange('0');
      else onChange(`${Number(value)}`);
    }

    if (pattern === 'email') {
      if (/.+@.+\..+$/.test(value)) onChange(value);
      else Notify.warning(i18n.Введите_корректный_email);
    }

    onBlur();
  };

  return (
    <label htmlFor={inputId} className={s.label} id={id}>
      <input
        type={type}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        onChange={handleChange}
        onBlur={handleBlur}
        readOnly={readOnly}
        autoComplete={autoComplete}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        className={s.input}
      />
    </label>
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.node,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  pattern: PropTypes.string,
  autoComplete: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  bgc: PropTypes.string,
};

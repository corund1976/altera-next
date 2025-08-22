import s from './contacts.module.css';

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
const PHONE = process.env.NEXT_PUBLIC_PHONE;

function Contacts() {
  return (
    <div className={s.block}>
      <div className={s.contacts}>
        <p className={s.label}>Колл-центр:</p>
        <a href={`tel:${PHONE}`} className={s.phone}>
          {PHONE}
        </a>
        <a href={`mailto:${EMAIL}`} className={s.email}>
          {EMAIL}
        </a>
      </div>

      <p className={s.franchise_text}>
        Агентство недвижимости «Альтера» работает по франшизе
      </p>

      <ul className={s.franchise_list}>
        <li>ИП Ибнеева: ул. Камалеева 32, 26</li>
        <li>ИП Адгамова: ул. Ибрагимова, 63</li>
        <li>ИП Гришанова: ул. Вишневского, 59</li>
      </ul>
    </div>
  );
}

export default Contacts;

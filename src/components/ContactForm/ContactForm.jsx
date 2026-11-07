function ContactForm() {
  return <div>
    <h2>Додати контакти</h2>
    <form>
      <input name="name" type="text" placeholder="напиши імя" />
      <input name="number" type="tel" placeholder="напиши телефон" />
      <button type="submit">Додати контакт</button>
    </form>
  </div>
}

export default ContactForm
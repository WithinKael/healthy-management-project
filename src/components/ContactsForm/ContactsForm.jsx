import axios from "axios";
import { useEffect, useState } from "react";
import computerJpg from "../../images/desktop/computer1x.jpg";
import computerWebp from "../../images/desktop/computer1x.webp";
import computer2x from "../../images/desktop/computer@2x.jpg";
import {
  Button,
  ContactBlock,
  ContactWrapper,
  FormWrapper,
  Forma,
  Img,
  Title,
} from "./ContactsForm.styled";
import { useForm } from "react-hook-form";

const ContactsForm = () => {
  const [formData, setFormData] = useState(() => {
    const stringifiedContacts = localStorage.getItem("key");
    const parsedContacts = JSON.parse(stringifiedContacts) ?? [
      {
        name: "",
        email: "",
        phone: "",
        service: "",
        comment: "",
      },
    ];
    return parsedContacts;
  });
  const { name, email, phone, service, comment } = formData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(formData);
    localStorage.setItem("key", stringifiedContacts);
  }, [formData]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (formData) => {
    try {
      await axios.post(
        "https://healthy-management.onrender.com/api/senddata",
        formData
      );
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        comment: "",
      });
      alert("Заявка відправлена!");
    } catch (error) {
      alert("Помилка при відправці заявки");
    }
  };

  return (
    <section className="container" id="contact">
      <ContactWrapper>
        <Title>Контакт</Title>
        <ContactBlock>
          <picture>
            <source
              media="(min-width: 1920px)"
              srcSet={`${computerWebp} 1x, ${computer2x} 2x`}
            />
            <Img src={computerJpg} />
          </picture>
          <FormWrapper>
            <h3>Залишайте ваші контактні дані і ми з вами зв&apos;яжемось</h3>
            <Forma onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Ім'я"
                {...register("name", {
                  required: "Це поле обов'язкове для заповнення",
                  pattern: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64}$/,
                })}
                value={name}
                onChange={handleChange}
              />
              {errors.name && (
                <div style={{ color: "red" }}>{errors.name.message}</div>
              )}
              <input
                type="email"
                placeholder="Емейл"
                {...register("email", {
                  required: "Це поле обов'язкове для заповнення",
                  pattern: {
                    value: /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
                    message: "Введіть коректне емейл",
                  },
                })}
                value={email}
                onChange={handleChange}
              />
              {errors.email && (
                <div style={{ color: "red" }}>{errors.email.message}</div>
              )}
              <input
                type="tel"
                placeholder="Номер телефону"
                {...register("phone", {
                  required: "Це поле обов'язкове для заповнення",
                  pattern: {
                    value: /^0\d{9}$/,
                    message: "Введіть коректний номер телефона",
                  },
                })}
                value={phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <div style={{ color: "red" }}>{errors.phone.message}</div>
              )}
              <select
                placeholder="Оберіть послугу"
                {...register("service", {
                  required: "Оберіть послугу",
                })}
                value={service}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Оберіть послугу
                </option>
                <option value="Менторство та консультації">
                  Менторство та консультації
                </option>
                <option value="Діагностика">Діагностика</option>
                <option value="Стратегії">Стратегії</option>
                <option value="Навчання">Навчання</option>
                <option value="Інше">Інше</option>
              </select>
              {errors.service && (
                <div style={{ color: "red" }}>{errors.service.message}</div>
              )}
              <textarea
                name="comment"
                placeholder="Ваше повідомлення"
                {...register("comment", {
                  pattern: {
                    value: /^.{0,500}$/,
                    message: "Максимальна довжина повідомлення 500 символів",
                  },
                })}
                value={comment}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <div style={{ color: "red" }}>{errors.message.message}</div>
              )}
              <Button type="submit">Надіслати</Button>
            </Forma>
          </FormWrapper>
        </ContactBlock>
      </ContactWrapper>
    </section>
  );
};

export default ContactsForm;

import axios from "axios";
import { useEffect } from "react";
import useLocalStorage from "./helpers";
import computerJpg from "../../images/desktop/computer1x.webp";
import computerWebp from "../../images/desktop/computer1x.webp";
import computer2x from "../../images/desktop/computer@2x.webp";
import {
  Button,
  ContactBlock,
  ContactWrapper,
  FormWrapper,
  Forma,
  Img,
  Input,
  Label,
  LabelTextarea,
  Select,
  StarLabel,
  Text,
  TextError,
  Textarea,
  Title,
} from "./ContactsForm.styled";
import { useForm } from "react-hook-form";
import Star from "./Star";

const ContactsForm = () => {
  const [formData, setFormData] = useLocalStorage("key", {
    name: "",
    email: "",
    phone: "",
    service: "",
    comment: "",
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
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
            <Text>
              Залишайте ваші контактні дані і ми з вами зв&apos;яжемось
            </Text>
            <Forma onSubmit={handleSubmit(onSubmit)}>
              <Label>
                Ім’я
                <StarLabel />
                <Input
                  type="text"
                  placeholder="Введіть своє ім’я"
                  {...register("name", {
                    required: "Це поле обов'язкове для заповнення",
                    pattern: {
                      value:
                        /^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,
                      message: "поле повинно містити одне або два слова",
                    },
                  })}
                  value={name}
                  onChange={handleChange}
                  errors={errors.name}
                />
                {errors.name && (
                  <TextError>
                    <Star />
                    {errors.name.message}
                  </TextError>
                )}
              </Label>
              <Label>
                Емейл
                <Star />
                <Input
                  type="email"
                  placeholder="Введіть емейл"
                  {...register("email", {
                    required: "Це поле обов'язкове для заповнення",
                    pattern: {
                      value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Введіть коректний емейл",
                    },
                  })}
                  value={email}
                  onChange={handleChange}
                  errors={errors.email}
                />
                {errors.email && (
                  <TextError>
                    <Star />
                    {errors.email.message}
                  </TextError>
                )}
              </Label>
              <Label>
                Номер телефону
                <Star />
                <Input
                  type="tel"
                  placeholder="Введіть номер телефону"
                  {...register("phone", {
                    required: "Це поле обов'язкове для заповнення",
                    pattern: {
                      value: /^0\d{9}$/,
                      message: "Введіть коректний номер телефона",
                    },
                  })}
                  value={phone}
                  onChange={handleChange}
                  errors={errors.phone}
                />
                {errors.phone && (
                  <TextError>
                    <Star />
                    {errors.phone.message}
                  </TextError>
                )}
              </Label>
              <Label>
                Послуга
                <Star />
                <Select
                  {...register("service", {
                    required: "Оберіть послугу",
                  })}
                  value={service}
                  onChange={handleChange}
                  errors={errors.service}
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
                </Select>
                {errors.service && (
                  <TextError>
                    <Star />
                    {errors.service.message}
                  </TextError>
                )}
              </Label>
              <LabelTextarea>
                Повідомлення
                <Textarea
                  name="comment"
                  placeholder="Введіть ваше повідомлення"
                  {...register("comment", {
                    pattern: {
                      value: /^.{0,500}$/,
                      message: "Максимальна довжина повідомлення 500 символів",
                    },
                  })}
                  value={comment}
                  onChange={handleChange}
                  errors={errors.comment}
                ></Textarea>
                {errors.comment && (
                  <TextError>
                    <Star />
                    {errors.comment.message}
                  </TextError>
                )}
              </LabelTextarea>
              <Button type="submit">Надіслати</Button>
            </Forma>
          </FormWrapper>
        </ContactBlock>
      </ContactWrapper>
    </section>
  );
};

export default ContactsForm;

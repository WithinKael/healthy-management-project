import axios from "axios";
import { useEffect } from "react";
import Select from "react-select";
import MediaQuery from "react-responsive";
import useLocalStorage, { options } from "./helpers";
import computerWebp from "../../images/desktop/computer1x.webp";
import computer2x from "../../images/desktop/computer@2x.webp";
import mobileWebp from "../../images/mobile/mob_computer1x.webp";
import mobile2x from "../../images/mobile/mob_computer@2x.webp";
import MaskedInput from "react-text-mask";
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
  StarLabel,
  Text,
  TextError,
  Textarea,
  Title,
} from "./ContactsForm.styled";
import { useForm, Controller } from "react-hook-form";
import customStyles from "./SelectFormStyle";
import Star from "./Star";

const ContactsForm = () => {
  const phoneMask = [
    "+",
    "3",
    "8",
    "(",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ")",
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    "-",
    /[0-9]/,
    /[0-9]/,
    "-",
    /[0-9]/,
    /[0-9]/,
  ];

  const [formData, setFormData] = useLocalStorage("key", {
    name: "",
    email: "",
    phone: "",
    service: "",
    comment: "",
  });
  const { name, email, phone, service, comment } = formData;
  const selectedService = options.find((option) => option.value === service);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    shouldFocusError: false,
    defaultValues: {},
  });

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(formData);
    localStorage.setItem("key", stringifiedContacts);
  }, [formData]);

  const handleChangeSelect = (selectedOption) => {
    setValue("service", selectedOption?.value || "");
    setFormData({
      ...formData,
      service: selectedOption?.value || "",
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (formData) => {
    try {
      const formattedData = {
        ...formData,
        phone: formData.phone.replace(/\D/g, "").slice(2),
      };
      await axios.post(
        "https://healthy-management.onrender.com/api/senddata",
        formattedData
      );
      console.log(formattedData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        comment: "",
      });
      reset();
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
          <div>
            <MediaQuery minWidth={1920}>
              <Img
                srcSet={`${computerWebp} 1920w, ${computer2x} 2x`}
                sizes="(min-width: 1920px) 1920px"
                src={computerWebp}
                alt="notebook"
              />
            </MediaQuery>

            <MediaQuery minWidth={300} maxWidth={1919}>
              <Img
                srcSet={`${mobileWebp} 375w, ${mobile2x} 2x`}
                sizes="(min-width: 375px) 375px"
                src={mobileWebp}
                alt="notebook"
              />
            </MediaQuery>
          </div>
          {/* <picture>
            <source
              media="(min-width: 1920px)"
              srcSet={`${computerWebp} 1x, ${computer2x} 2x`}
            />
            <Img src={computerJpg} />
          </picture> */}
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
                  mask={phoneMask}
                  placeholder="Введіть номер телефону"
                  {...register("phone", {
                    required: "Це поле обов'язкове для заповнення",
                    pattern: {
                      value: /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
                      message: "Введіть коректний номер телефона",
                    },
                  })}
                  value={phone}
                  onChange={handleChange}
                  errors={errors.phone}
                  render={({ ref, ...props }) => (
                    <MaskedInput
                      {...props}
                      ref={(e) => {
                        ref(e);
                      }}
                    />
                  )}
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
                <Controller
                  name="service"
                  control={control}
                  shouldUnregister={false}
                  render={({ field }) => (
                    <Select
                      {...register("service", {
                        required: "Оберіть послугу",
                      })}
                      placeholder="Оберіть послугу"
                      {...field}
                      options={options}
                      styles={customStyles}
                      errors={errors.service}
                      onChange={handleChangeSelect}
                      value={selectedService}
                    />
                  )}
                />
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

// =================================================================

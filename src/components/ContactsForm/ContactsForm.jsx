import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import MediaQuery from "react-responsive";
import swal from "sweetalert";
import useLocalStorage, { options } from "./helpers";
import computerWebp from "../../images/desktop/computer1x.webp";
import computer2x from "../../images/desktop/computer@2x.webp";
import computer1440Jpg from "../../images/desktop1440/computer_1440_1x.jpg";
import computer1440Webp from "../../images/desktop1440/computer_1440_1x.webp";
import computer14402x from "../../images/desktop1440/computer_1440@2x.webp";
import tabletJpg from "../../images/tablet/computer_768_1x.jpg";
import tabletWebp from "../../images/tablet/computer_768_1x.webp";
import tablet2x from "../../images/tablet/computer_768@2x.webp";
import mobileWebp from "../../images/mobile/mob_computer1x.webp";
import mobile2x from "../../images/mobile/mob_computer@2x.webp";

import {
  Button,
  ContactBlock,
  ContactWrapper,
  FormWrapper,
  Forma,
  Img,
  Input,
  InputTel,
  Label,
  LabelEmailPhone,
  LabelTextarea,
  Section,
  StarLabel,
  Text,
  TextError,
  Textarea,
  Title,
  WrapEmailPhone,
} from "./ContactsForm.styled";
import { useForm, Controller } from "react-hook-form";
import customStyles from "./SelectFormStyle";
import Star from "./Star";

const ContactsForm = () => {
  const telRef = useRef();
  const [formData, setFormData] = useLocalStorage("key", {
    name: "",
    email: "",
    phone: "",
    service: "",
    comment: "",
  });
  const { name, email, phone, service, comment } = formData;
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    shouldFocusError: false,
    defaultValues: formData,
  });

  useEffect(() => {
    const storedService = localStorage.getItem("key")
      ? JSON.parse(localStorage.getItem("key")).service
      : "";
    const initialOption = options.find(
      (option) => option.value === storedService
    );
    setSelectedOption(initialOption);
  }, []);

  const handleChangeSelect = (selectedOption) => {
    setValue("service", selectedOption);
    setFormData({
      ...formData,
      service: selectedOption.value,
    });
    setSelectedOption(selectedOption);
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
        name: name.replace(/\s+/g, " ").trim(),
        email: email.trim(),
        phone: formData.phone.replace(/\D/g, "").slice(2),
        service: selectedOption?.value,
      };
      await axios.post(
        "https://healthy-management.onrender.com/api/senddata",
        formattedData
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        comment: "",
      });
      setSelectedOption(null);
      swal("Вітаємо!", "Ваша заявка успішно відправлена!", "success", {
        buttons: false,
        timer: 3000,
      });
    } catch (error) {
      swal(
        "Вибачте!",
        "При відправці заявки сталася помилка, спробуйте ще раз!",
        "error",
        {
          buttons: false,
          timer: 3000,
        }
      );
    }
  };

  return (
    <Section className="container" id="contact">
      <ContactWrapper>
        <Title>Контакт</Title>
        <ContactBlock>
          <div>
            <MediaQuery maxWidth={767}>
              <Img
                srcSet={`${mobile2x} 2x, ${mobileWebp} 1x`}
                sizes="(max-width: 767px) 100vw"
                src={mobileWebp}
                alt="notebook"
                loading="lazy"
              />
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1439}>
              <Img
                srcSet={`${tablet2x} 2x, ${tabletWebp} 1x`}
                type="image/webp"
                sizes="(min-width: 768px) 100vw (max-width: 1439px) 100vw"
                src={tabletJpg}
                alt="notebook"
                loading="lazy"
              />
            </MediaQuery>
            <MediaQuery minWidth={1440} maxWidth={1919}>
              <Img
                srcSet={`${computer14402x} 2x, ${computer1440Webp} 1x`}
                type="image/webp"
                sizes="(min-width: 1440px) 100vw (max-width: 1919px) 100vw"
                src={`${computer1440Jpg}`}
                alt="notebook"
                loading="lazy"
              />
            </MediaQuery>
            <MediaQuery minWidth={1920}>
              <Img
                srcSet={`${computer2x} 2x, ${computerWebp} 1x`}
                type="image/webp"
                sizes="(min-width: 1920px) 100vw"
                src={computerWebp}
                alt="notebook"
                loading="lazy"
              />
            </MediaQuery>
          </div>
          <FormWrapper>
            <Text>Залишайте контактні дані і ми з вами зв&apos;яжемось</Text>
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
                        /^(?:\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|\s*[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})\s*$/,
                      message: "Поле повинно містити одне або два слова",
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
              <WrapEmailPhone>
                <LabelEmailPhone>
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
                </LabelEmailPhone>
                <LabelEmailPhone>
                  Номер телефону
                  <Star />
                  <InputTel
                    ref={telRef}
                    type="tel"
                    mask="+38(099)999-99-99"
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
                  />
                  {errors.phone && (
                    <TextError>
                      <Star />
                      {errors.phone.message}
                    </TextError>
                  )}
                </LabelEmailPhone>
              </WrapEmailPhone>

              <Label>
                Послуга
                <Star />
                <Controller
                  name="service"
                  control={control}
                  shouldUnregister={false}
                  defaultValue={service}
                  rules={{
                    validate: (value) => {
                      return value ? undefined : "Оберіть послугу";
                    },
                  }}
                  render={({ field }) => (
                    <Select
                      {...register("service", {
                        required: "Оберіть послугу",
                      })}
                      placeholder="Оберіть послугу"
                      {...field}
                      options={options}
                      isSearchable={false}
                      styles={customStyles}
                      errors={errors.service}
                      onChange={handleChangeSelect}
                      value={selectedOption}
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
                    maxLength: {
                      value: 500,
                      message: "Максимальна кількість 500 символів",
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
    </Section>
  );
};

export default ContactsForm;

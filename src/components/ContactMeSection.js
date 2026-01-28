import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import Header from "./Header";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  
  const { language } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment: ''
    },
    onSubmit: (values) => {
      submit('http://127.0.0.1:8000/api/confirms/', values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
     .required('Required'),
     email: Yup.string().email("Invalid email address").
     required('Required'),
     comment: Yup.string().min(25, "Must be at least 25 characters").required('Required')
    }),
  });

  useEffect(() => {
    if(response){
      onOpen(response.type, response.message);
      if(response.type === 'success'){
        formik.resetForm()
      }
    }
  }, [response])

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
        {language === "DE" ? "Kontaktieren Sie mich" : "Contact me"}
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">{language === "DE" ? "Name" : "Name"}</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">{language === "DE" ? "Email Addresse" : "Email Address"}</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">{language === "DE" ? "Art der Anfrage" : "Type of enquiry"}</FormLabel>
                <Select id="type" name="type"
                {...formik.getFieldProps('type')}
                >
                  <option value="hireMe">{language === "DE" ? "Freiberuflicher Projektvorschlag" : "Freelance project proposal"}</option>
                  <option value="fullTime">{language === "DE" ? "Vollzeit" : "Full-Time"}</option>
                  <option value="partTime">{language === "DE" ? "Teilzeit" : "Part-Time"}</option>
                  <option value="openSource">
                    {language === "DE" ? "Beratungssitzung zu Open Source" : "Open source consultancy session"}
                  </option>
                  <option value="other">{language === "DE" ? "Sonstiges" : "Other"}</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">{language === "DE" ? "Ihre Nachricht" : "Your message"}</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                {language === "DE" ? "Einreichen" : "Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;

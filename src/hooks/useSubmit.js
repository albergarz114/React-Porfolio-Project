import {useState} from "react";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // IMPORTANT: If your Django Serializer uses 'first_name', 
        // map it here or ensure your serializer handles 'firstName'
        body: JSON.stringify({
          first_name: data.firstName, 
          email: data.email,
          type: data.type,
          comment: data.comment,
        }),
      });

      const json = await result.json();

      if (result.ok) {
        setResponse({
          type: 'success',
          message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
        });
      } else {
        throw new Error(json.message || "Something went wrong");
      }
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Oops! Something went wrong, please try again later!',
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
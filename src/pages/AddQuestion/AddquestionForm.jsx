import React, { useEffect, useState } from "react";
import FormControll from "../../components/FormControll";
import DropDown from "../../components/DropDown";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddquestionForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    company: "",
    interviewerName: "",
  });
  const [cookie, setCookie, removeCookie] = useCookies([]);
  const navigate = useNavigate();
  const checkToken = async () => {
    try {
      let { data } = await axios.post("http://localhost:5000/api/checkuser", {
        token: cookie.jwt,
      });
    } catch (err) {
      navigate("/login");
    }
  };
  useEffect(() => {
    if (!cookie.jwt) {
      navigate("/login");
    } else {
      checkToken();
    }
  }, [cookie, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post("http://localhost:5000/api/addquestion", {
        ...formData,
        token: cookie.jwt,
      });
      console.log(data);
      setFormData({
        title: "",
        category: "",
        company: "",
        interviewerName: "",
      });
    } catch (err) {
      alert(err.response.data.message);

      navigate("/login");
    }
  };
  return (
    <div className="min-h-screen w-full bg-[#cac8c8d0] mobile:py-1 md:py-3 flex items-center justify-center miniMobile:pt-[65px] mobile:pt-[72px] md:pt-[85px]">
      <div className="w-[600px] mobile:px-2 miniMobile:px-2  min-h-screen bg-[white] shadow-md rounded-md grid grid-cols-1 gap-2">
        <div className="text-center pt-5 font-bold text-xl capitalize  text-[#1372c5d8]">
          Add New Question
        </div>
        <form onSubmit={submitHandler}>
          <FormControll
            placeholder="Interviewer's Name"
            label="Interviewer's Name *"
            required
            name="interviewerName"
            value={formData.interviewerName}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <FormControll
            placeholder="Company Name"
            label="Company Name *"
            required
            name="company"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <DropDown
            required
            label="Choose Category *"
            data={["javascript", "dsa", "ReactJS", "NodeJS"]}
            name="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <Textarea
            label="Enter Question"
            placeholder="Enter Question"
            required
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <div className="flex justify-evenly py-3 items-start">
            <Button
              text="reset"
              type="reset"
              onClick={() =>
                setFormData({
                  title: "",
                  category: "",
                  company: "",
                  interviewerName: "",
                })
              }
            />
            <Button text="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddquestionForm;

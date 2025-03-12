import React, { useEffect } from "react";
import { formFields } from "../../Data/index";
import { useForm } from "react-hook-form";
import styles from "./cpf.module.css";
import { dateToUnix } from "../../Utils/index";
import { useCreatePresale } from "../../Hooks/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { FormData } from "@/types";

const CreatePresaleForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      startTime: "",
      endTime: "",
      liquidity: "",
      saleRate: "",
      listingRate: "",
      hardCap: "",
      softCap: "",
      maxBuy: "",
      minBuy: "",
    },
  });

  const { createPresale, isPending, isSuccess, isError, error } =
    useCreatePresale();
  const onSubmit = async (data) => {
    try {
      const convertedData = {
        ...data,
        startTime: dateToUnix(data.startTime),
        endTime: dateToUnix(data.endTime),
      };
      // console.log("🚀 ~ onSubmit ~ data:", convertedData);
      const txReceipt = await createPresale(convertedData);
      console.log("submitted: ", txReceipt);
      // reset();
    } catch (error) {
      console.error("Transaction Failed:", error);

      // Show error toast
      toast.error("Transaction failed. Please try again.");
    }
  };

  // Show toast notification when status updates
  useEffect(() => {
    if (isSuccess) {
      reset();
      toast.success("Presale created successfully!");
    }

    if (isError) {
      toast.error(`Error: ${error?.message}`);
    }
  }, [isSuccess, isError, error, reset]);

  return (
    <div className={`${styles.cardBg}`}>
      <h1 className="font-semibold text-xl p-4 uppercase border-b mb-4">
        Create Presale
      </h1>
      <div className="p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formFields.map((field) => (
              <div key={field.label} className={`flex flex-col gap-2`}>
                <label>
                  {field.label}{" "}
                  <span className="text-themeColor text-lg">*</span>
                </label>
                <div>
                  {["startTime", "endTime"].includes(field.fieldName) ? (
                    <input
                      disabled={isPending}
                      id="datetime"
                      type="datetime-local"
                      {...register(field.fieldName, {
                        required: `${field.label} is required`,
                      })}
                      className={`${styles.inputBox}`}
                    />
                  ) : (
                    <input
                      disabled={isPending}
                      {...register(field.fieldName, {
                        required: `${field.label} is required`,
                        pattern:
                          field.fieldName.includes("Rate") ||
                          field.fieldName.includes("Cap") ||
                          field.fieldName.includes("Buy")
                            ? {
                                value: /^[0-9]+(\.[0-9]{1,18})?$/,
                                message: "Enter a valid number",
                              }
                            : undefined,
                      })}
                      className={`${styles.inputBox} focus:border-themeColor`}
                      autoComplete="off"
                    />
                  )}
                </div>
                {errors[field.fieldName] && (
                  <p className="text-red-500">
                    {errors[field.fieldName]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end w-full">
            <button
              type="submit"
              className="px-4 py-3 rounded-md bg-themeColor"
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePresaleForm;

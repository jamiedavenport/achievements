import React from "react";
import InputGroup from "./form/InputGroup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  when: string;
  what: string;
};

const schema = yup.object().shape({
  when: yup.date().required(),
  what: yup.string().required(),
});

const NewAchievementForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const saveAchievement = console.log;

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          New achievement ✨
        </h3>
        <form
          onSubmit={handleSubmit(saveAchievement)}
          className="mt-5 space-y-5 md:space-y-0 md:space-x-5 md:flex md:items-end"
        >
          <InputGroup
            id="when"
            label="When?"
            type="date"
            ref={register}
            min="2021-01-01"
            max="2021-12-31"
            error={errors.when?.message}
          />
          <div className="w-full">
            <InputGroup
              id="what"
              label="What?"
              placeholder="Started my dream job"
              ref={register}
              error={errors.what?.message}
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewAchievementForm;

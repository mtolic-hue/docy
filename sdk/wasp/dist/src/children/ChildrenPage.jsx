import React from "react";
import { useForm, Controller } from "react-hook-form";
import { createChild, getChildren, useQuery } from "wasp/client/operations";
import { Link } from "wasp/client/router";
import { Button } from "../shared/components/Button";
import { Input } from "../shared/components/Input";
export const ChildrenPage = () => {
    const { data: children } = useQuery(getChildren);
    const { handleSubmit, control, reset } = useForm({
        defaultValues: { name: "", birthDate: "", notes: "" },
    });
    const onSubmit = async (data) => {
        try {
            await createChild(data);
            reset();
            window.location.reload();
        }
        catch (err) {
            window.alert(String(err));
        }
    };
    return (<div className="flex flex-col items-center gap-8 px-8 py-12">
      <h1 className="text-4xl font-bold">Children</h1>
      <div className="flex w-full flex-col items-center gap-6">
        <section className="card w-full max-w-3xl p-4">
          <h2 className="text-xl font-semibold">Create a child profile</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Controller name="name" control={control} rules={{ required: true }} render={({ field, fieldState }) => <Input label="Name" fieldState={fieldState} {...field}/>}/>
            <Controller name="birthDate" control={control} render={({ field, fieldState }) => <Input label="Birth date (optional)" fieldState={fieldState} type="date" {...field}/>}/>
            <Controller name="notes" control={control} render={({ field, fieldState }) => <Input label="Notes (optional)" fieldState={fieldState} {...field}/>}/>
            <div className="flex justify-end">
              <Button type="submit">Create</Button>
            </div>
          </form>
        </section>

        <section className="card w-full max-w-3xl p-4">
          <h2 className="text-xl font-semibold">Profiles</h2>
          <ul className="flex flex-col gap-2">
            {children && children.length > 0 ? (children.map((c) => (<li key={c.id}>
                  <Link to={{ pathname: `/children/${c.id}` }} className="text-primary-600">
                    {c.name}
                  </Link>
                </li>))) : (<li>No children yet</li>)}
          </ul>
        </section>
      </div>

      <p className="text-sm text-neutral-500">Educational tool only — confirm dosing with a healthcare professional.</p>
    </div>);
};
export default ChildrenPage;
//# sourceMappingURL=ChildrenPage.jsx.map
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useQuery, createCheck, getChild, getChildChecks } from "wasp/client/operations";
import { Button } from "../shared/components/Button";
import { Input } from "../shared/components/Input";

type FormValues = {
  weightKg: number;
  temperatureC: number;
  lastGivenParacetamolAt?: string;
  lastGivenNurofenAt?: string;
};

export const ChildPage = () => {
  const { id } = useParams();
  if (!id) return <div className="p-4">Invalid child id</div>;
  const { data: child } = useQuery(getChild, { id });
  const { data: checks } = useQuery(getChildChecks, { childId: id, limit: 20 });

  const { handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: { weightKg: 0, temperatureC: 36.5, lastGivenParacetamolAt: "", lastGivenNurofenAt: "" },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await createCheck({ childId: id!, ...data });
      reset();
      window.location.reload();
    } catch (err) {
      window.alert(String(err));
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 px-8 py-12">
      <h1 className="text-4xl font-bold">{child ? child.name : "Child"}</h1>

      <section className="card w-full max-w-3xl p-4">
        <h2 className="text-xl font-semibold">New Check</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller name="weightKg" control={control} rules={{ required: true, min: 0.1 }} render={({ field, fieldState }) => <Input label="Weight (kg)" fieldState={fieldState} type="number" step="0.1" {...field} />} />
          <Controller name="temperatureC" control={control} rules={{ required: true }} render={({ field, fieldState }) => <Input label="Temperature (°C)" fieldState={fieldState} type="number" step="0.1" {...field} />} />
          <Controller name="lastGivenParacetamolAt" control={control} render={({ field, fieldState }) => <Input label="Last given Paracetamol (optional)" fieldState={fieldState} type="datetime-local" {...field} />} />
          <Controller name="lastGivenNurofenAt" control={control} render={({ field, fieldState }) => <Input label="Last given Nurofen (optional)" fieldState={fieldState} type="datetime-local" {...field} />} />

          <div className="flex justify-end">
            <Button type="submit">Calculate & Save</Button>
          </div>
        </form>
      </section>

      <section className="card w-full max-w-3xl p-4">
        <h2 className="text-xl font-semibold">History (last 20)</h2>
        <div className="flex flex-col gap-2">
          {checks && checks.length > 0 ? (
            checks.map((c: any) => (
              <div key={c.id} className="p-2 border-b">
                <div className="text-sm text-neutral-600">{new Date(c.createdAt).toLocaleString()}</div>
                <div>Weight: {c.weightKg} kg</div>
                <div>Temp: {c.temperatureC} °C — {c.temperatureStatus}</div>
                <div>Paracetamol: {c.paracetamolMl.toFixed(1)} ml</div>
                <div>Nurofen: {c.nurofenMl.toFixed(1)} ml</div>
                <div>
                  Next Paracetamol: {c.nextParacetamolAt ? new Date(c.nextParacetamolAt).toLocaleString() : "Eligible now"}
                </div>
                <div>
                  Next Nurofen: {c.nextNurofenAt ? new Date(c.nextNurofenAt).toLocaleString() : "Eligible now"}
                </div>
                <div className="text-sm text-neutral-500">Can give now: {c.canGiveNow ? "Yes" : "No"}</div>
              </div>
            ))
          ) : (
            <div>No checks yet</div>
          )}
        </div>
      </section>

      <p className="text-sm text-neutral-500">Educational tool only — confirm dosing with a healthcare professional.</p>
    </div>
  );
};

export default ChildPage;

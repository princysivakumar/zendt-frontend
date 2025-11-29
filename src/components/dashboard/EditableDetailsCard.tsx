import { useState } from "react";

interface FieldConfig {
  key: string;
  label: string;
  type?: string;
}

interface EditableDetailsCardProps {
  title: string;
  description?: string;
  fields: FieldConfig[];
  initialValues: Record<string, string>;
}

export default function EditableDetailsCard({
  title,
  description,
  fields,
  initialValues,
}: EditableDetailsCardProps) {
  const [form, setForm] = useState(initialValues);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [key]: event.target.value });
    };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <section className="rounded-[19px] mb-6 bg-[#1E1E1E] text-white p-8 shadow-[0_35px_65px_rgba(4,4,7,0.55)]  space-y-6">
      <header className="flex items-center justify-between text-sm">
        <div>
          <h3 className="text-[17px] font-light tracking-tight">{title}</h3>
          {description && <p className="text-xs text-white/60 mt-1">{description}</p>}
        </div>
        <button
          type="button"
          onClick={() => setIsEditing((prev) => !prev)}
          className="text-white/70 hover:text-white text-sm focus-visible:outline-none"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </header>

      <div className="space-y-6">
        {fields.map((field) => (
          <fieldset key={field.key} className="space-y-2">
            <legend className="text-[17px] uppercase tracking-tight text-white/70">
              {field.label}
            </legend>
            <input
              type={field.type ?? "text"}
              value={form[field.key] ?? ""}
              onChange={handleChange(field.key)}
              readOnly={!isEditing}
              className="w-full bg-transparent text-[12px] text-white/90 focus:outline-none"
            />
            <div className="h-[0.2px] bg-white/30" />
          </fieldset>
        ))}
      </div>

      {isEditing && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-full border border-white/40 px-5 py-1 text-sm text-white hover:bg-white/10"
          >
            Save
          </button>
        </div>
      )}
    </section>
  );
}

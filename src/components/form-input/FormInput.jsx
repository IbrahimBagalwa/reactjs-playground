const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default FormInput;

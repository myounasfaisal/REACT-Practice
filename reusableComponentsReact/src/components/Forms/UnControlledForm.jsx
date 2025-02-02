export default function UnControlledForm({ children, onSubmit }) {
    const inputRefs = useRef({});
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = {};
      Object.keys(inputRefs.current).forEach((name) => {
        formData[name] = inputRefs.current[name].value;
      });
      onSubmit(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            ref: (el) => (inputRefs.current[child.props.name] = el),
          })
        )}
        <button type="submit">Submit</button>
      </form>
    );
  }
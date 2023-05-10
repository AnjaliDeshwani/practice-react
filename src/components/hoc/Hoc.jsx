// const hoc = (Component) => {
//   return () => {
//     const data = "My Data";
//     return <Component style={styles} />;
//   };
// };

export const Hoc = (Component) => {
  return () => {
    const data = "My Data";
    return <Component data={data} />;
  };
};

export const Hoc1 = (Component) => {
  return () => {
    const data = "My name is Anjli";
    return <Component data={data} />;
  };
};

export default function ErrorMsg(props) {
  const { mess } = props;
  return (
    <>
      <p className="text-sm font-medium text-red-600">{mess}</p>
    </>
  );
}

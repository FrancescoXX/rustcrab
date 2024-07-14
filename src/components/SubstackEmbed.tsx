export default function SubstackEmbed() {
  return (
    <div className="flex justify-center my-8 w-full max-w-md">
      <iframe
        src="https://francescociulla.substack.com/embed"
        width="100%"
        height="150"
        style={{ border: '1px solid #FFA500', background: 'white', borderRadius: '8px' }}
        className="shadow-lg"
      ></iframe>
    </div>
  );
}

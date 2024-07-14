export default function SubstackEmbed() {
  return (
    <div className="flex justify-center my-8">
      <iframe
        src="https://francescociulla.substack.com/embed"
        width="100%"
        height="150"
        style={{ border: '2px solid #dd6b20', background: 'white', borderRadius: '8px' }}
      ></iframe>
    </div>
  );
}

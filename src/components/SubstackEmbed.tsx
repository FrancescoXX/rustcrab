export default function SubstackEmbed() {
  return (
    <div className="flex justify-center my-8">
      <iframe
        src="https://francescociulla.substack.com/embed"
        width="480"
        height="150"
        style={{
          border: '2px solid #dd6b20', /* Rust orange border */
          background: 'white',
          borderRadius: '12px', /* Rounded corners */
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' /* Shadow effect */
        }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}

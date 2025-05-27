export default function dynamicRenderer(blocks) {
    console.log(blocks);
    return blocks.map((block, index) => {
      const type = block.__component;
  
      switch (type) {
        case 'content.content':
          return (
            <div key={index} className="content-block">
              <p>{block.Text}</p>
              <blockquote>{block.Quote}</blockquote>
              <p>{block.desciption}</p>
            </div>
          );
        case 'content.rich-text':
          return (
            <div key={index} dangerouslySetInnerHTML={{ __html: block.text }} />
          );
        case 'content.image':
          return <img key={index} src={block.image?.url} alt="dynamic" />;
        case 'content.quote':
          return <blockquote key={index}>{block.text}</blockquote>;
        default:
          return null;
      }
    });
  }
  
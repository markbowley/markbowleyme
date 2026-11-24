// Turns ![alt](src "Caption") into <figure><img><figcaption>Caption</figcaption></figure>.
// Markdown wraps images in <p>, so a paragraph holding only one titled image is replaced by the figure.
export default function rehypeFigure() {
	const isTitledImg = (n) => n?.type === 'element' && n.tagName === 'img' && n.properties?.title;
	const isBlank = (n) => n.type === 'text' && !n.value.trim();

	const walk = (node) => {
		if (!node.children) return;
		node.children = node.children.map((child) => {
			if (child.type === 'element' && child.tagName === 'p') {
				const content = child.children.filter((c) => !isBlank(c));
				if (content.length === 1 && isTitledImg(content[0])) {
					const img = content[0];
					const caption = String(img.properties.title);
					delete img.properties.title;
					return {
						type: 'element',
						tagName: 'figure',
						properties: {},
						children: [
							img,
							{ type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: caption }] },
						],
					};
				}
			}
			walk(child);
			return child;
		});
	};

	return (tree) => walk(tree);
}

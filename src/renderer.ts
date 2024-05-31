import size from 'window-size';

class Renderer {
	width = 0;
	height = 0;

	constructor() {
		this.width = this.getWidth();
		this.height = this.getHeight();
	}

	drawBox = (height: number) => {
		Array(height)
			.fill(0)
			.forEach(() => {
				process.stdout.write('#'.repeat(this.width));
			});
	};

	getHeight = () => {
		return size.height;
	};
	getWidth = () => {
		return size.width;
	};
}

export default Renderer;

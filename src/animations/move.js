import { createAnimation } from '@ionic/core'

export default function useAnimation() {
	const anim = createAnimation()
		.addElement(document.querySelector('.square'))
		.duration(1500)
		.iterations(Infinity)
		.fromTo('transform', 'translateX(0px)', 'translateX(100px)')
		.fromTo('opacity', '1', '0.2');
	return { anim }
}

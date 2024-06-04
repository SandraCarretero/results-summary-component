import Result from '../result/Result';
import Summary from '../summary/Summary';
import style from './container.module.css';
const Container = () => {
	return (
		<div className={style.container}>
			<Result></Result>
			<Summary></Summary>
		</div>
	);
};

export default Container;

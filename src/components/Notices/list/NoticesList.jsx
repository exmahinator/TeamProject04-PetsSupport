import NoticesItems from '../items/NoticesItems';
import styles from './NoticesList.module.scss';



const NoticesList = ({notices}) => {

	console.log('notices', notices[0])
	return (
		<ul className={styles.wrapper}>
			{/* <NoticesItems/> */}
			{notices.map(
				({
					_id : id,
					category,
					name,
					title,
					birthday,
					breed,
					sex,
					location,
					price,
					imageURL,
					comments,
					owner,
				}) => (
					<li key={id}>
						<NoticesItems
						category={category}
						title={title}
						name={name}
						birthday={birthday}
						breed={breed}
						sex={sex}
						location={location}
						price={price}
						imageURL={imageURL}
						comments={comments}
						owner={owner}
					/>;
					</li>
				)
			)}
		</ul>
	);
};

export default NoticesList;

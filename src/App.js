import { getImage } from "./utils"

// introducing properties: way to send parameters to component
function Avatar({person, size}){
	return (
		<img 
			className="avatar"
			src={getImage(person)}
			alt="fulvios"
			width={size}
			height={size}
		/>
	)
}

export default function Profile(){
	return (
		<Avatar 
			person={{imageId: "MK3eW3Am"}}
			size={100}
		/>
	)
}
import ExpandablePanel from "./ExpandablePanel";
import Button from "../../orgnization/elements/Button";
import {GoTrashcan} from "react-icons/go";
import {useRemoveAlbumMutation} from "../store/MediaStore";

function AlbumsListItem({album}) {

    const [removeAlbum, result] = useRemoveAlbumMutation()

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }
    const header = <>
        <Button loading={result.isLoading} className="mr-3" onClick={handleRemoveAlbum}>
            <GoTrashcan/>
        </Button>
        {result.error && <div>Error deleting album.</div>}
        {album.title}
    </>

    return (
        <ExpandablePanel key={album.id} header={header}>
            List of photos in the album
        </ExpandablePanel>
    )

}

export default AlbumsListItem
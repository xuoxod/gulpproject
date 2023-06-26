import { deleteAsync } from "del";

export const deleteDir = async ( path, cb ) => {
    const deletedDir = await deleteAsync( [ path ] );

    cb( deletedDir );
};
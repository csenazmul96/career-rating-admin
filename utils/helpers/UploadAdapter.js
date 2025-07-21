import {textEditorFileUpload} from "@/utils/api/videoContentRequest";
import {toast} from "react-toastify";

export default function UploadAdapter(loader) {
    return {
        upload: () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const file = await loader.file;

                    const formData = new FormData();

                    formData.append('files', file);

                    const response = await textEditorFileUpload(formData);

                   if (response.status === "success"){
                       resolve({
                           default: response.data[0].publicUrl
                       });
                   } else {
                       toast.error('Something went wrong!')
                   }
                } catch (error) {
                    reject(error);
                }
            });
        },
        abort: () => {}
    };
}
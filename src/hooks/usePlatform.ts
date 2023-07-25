import useData from "./useData";
import { PlatForm } from "./useGame";


const usePlatform = () => useData<PlatForm>('/platforms/lists/parents')

export default usePlatform
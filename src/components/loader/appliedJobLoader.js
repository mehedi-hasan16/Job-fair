import { getShoppingCart } from "../../fakedb";

const appliedJobLoader= async () =>{
const loaderJob = await fetch('/featuredJobs.json')
const job = await loaderJob.json();

const storedCart = getShoppingCart();
const appliedJob = []
for (const id in storedCart){
    const applied = job.find(job=>job.id==id)
    if(applied){

        appliedJob.push(applied)
    }
}

return appliedJob;
}
export default appliedJobLoader;
export const formatDate = (date)=>{
    if (!date) return "No date provided"
    return new Date(date).toLocaleDateString()
}
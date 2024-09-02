export const countRemainingDays = (endDateStr:string)=>{
   const endDate = new Date(endDateStr);

  const today = new Date();
  const diffInMs = endDate.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
}
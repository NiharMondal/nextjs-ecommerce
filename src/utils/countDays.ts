export const countRemainingDays = (endDateStr:string)=>{
    
    const [day, month, year] = endDateStr.split('-');
    const endDate: Date = new Date(Number(year), Number(month) - 1, Number(day)); 

    const today: Date = new Date();

    // Calculate the difference in milliseconds
    const diffInMs: number = endDate.getTime() - today.getTime();

    // Convert milliseconds to days
    const diffInDays: number = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
}
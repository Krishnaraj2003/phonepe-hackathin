interface DepartmentCountInterface {
    departments: {[name:string]:number};
    addDepartment(name: string): void;
    updateCount(name: string, score:number): void;
    getTopDepartment(maxCount:number): [string, number][];
}

export class DepartmentCount implements DepartmentCountInterface {
    public departments: {[name:string]:number} = {};
    addDepartment(name: string): void {
        this.departments[name] = 0;
    }
    updateCount(name: string, score:number): void {
        this.departments[name]+=score;
    }
    getTopDepartment(maxCount:number): [string,number][] {
        let topDepartments: [string, number][] = Object.entries(this.departments);
        return topDepartments.sort((a,b) => b[1] - a[1]).slice(0, maxCount);
    }
}
declare function getUrlParamByName(name: string): string;
declare function trim(str: string): string;

declare function getToday(withTime?: boolean): Date;
declare function getDaysAgo(day: number, withTime?: boolean): Date;
declare function getFormatDate(date: Date): string;

declare const wsxJsTool: {
    getUrlParamByName: typeof getUrlParamByName;
    trim: typeof trim;
    getToday: typeof getToday;
    getDaysAgo: typeof getDaysAgo;
    getFormatDate: typeof getFormatDate;
};

export { wsxJsTool as default };

const IPV4_PATTERN = /^(\d{1,3}\.){3}\d{1,3}$/;
const IPV6_PATTERN = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

export const checkIpAddress = (ip:string) => IPV4_PATTERN.test(ip) || IPV6_PATTERN.test(ip);

import { SortByEducationCertificate } from "@/enums/education-certificate/education-certificate.enum";
import BaseFilterModel from "@/interfaces/base-filter.model";

export default interface CourseFilterModel extends BaseFilterModel {
  SortBy: SortByEducationCertificate;
}

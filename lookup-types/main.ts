export type SubmitRequest = {
    transactionId: string,
    personal: {
        title: string,
        driverFirstname: string,
        driverMiddleName: string,
        driverLastName: string,
        email: string,
        phone: string,
        previousAliases: {
            firtsName: string,
            middleName: string,
            lastName: string,
        }[],
        gender: string,
        dob: string,
        birthCountry: string,
    },
    driver: {
        licenceNumber: string,
        expiryDate: string,
        hasLicenceForMin6Months: boolean,
        hasTerritoryLicence: boolean,
        territoryLicenceStates?: string[],
        hasDriverAccreditation: boolean,
        vechileClasses: string[],
        tandc: true,
    },
    concent: {
        understandInformation: boolean,
        informationTrue: boolean,
        informationConsidered: boolean,
        medicalVicRoadPoliceCheckConsent: boolean,
        consentToDisclosing: boolean,
        indemnifyAgainstLiability: boolean,
        acidCheckConcent: boolean,
        childrenCheckConsent: boolean,
        personalInfoCheckConsent: boolean,
        trafficOffences: boolean,
        assessAcicCheckConsent: boolean,
        criminalOffences: boolean,
        licenceCanceledSuspended: boolean,
        sexOffendersReporting: boolean,
        ausWorkRights: boolean,
        additionalInformation: string,
    },
    payment: {
        cardToken: string,
    },
};

// lookup type
type PaymentRequest = SubmitRequest['payment'];
type PreviousAliases = SubmitRequest['personal']['previousAliases'][0];

export function getPayment(): PaymentRequest {
    return {
        cardToken: '32133j;ldjfladksfasdfsdfds',
    }
}
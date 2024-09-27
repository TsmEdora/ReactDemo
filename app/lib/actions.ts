'use server';

export async function createInvoice(formData: FormData) {
    //const rawFormData = Object.fromEntries(formData.entries()); for more fields instead of just 3
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };
    // Test it out:
    console.log(rawFormData);
}
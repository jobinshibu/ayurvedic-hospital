import { Check, Star, Home, ArrowRight } from 'lucide-react';

export default function OurPlansPage() {
    const commonIncludes = [
        'Room rent',
        'Laundry charge',
        'Nursing charge',
        'Food for patient and bystander',
        'Internal medicine',
        'External treatment',
        'Everyday consultation (except Sunday)',
        'Baby treatment'
    ];

    const classicTreatments = [
        'Head massage', 'Face massage', 'Body massage',
        'Face pack (weekly once)', 'Body pack (weekly once)', 'Hair pack (weekly once)',
        'Vethukuli', 'Vayarukettal', 'Kesa dhoomam',
        'Anjanam', 'Nasa dhumam'
    ];

    const premiumTreatments = [
        'Head massage', 'Face massage', 'Body massage',
        'Hair pack', 'Face pack', 'Body pack',
        'Vethukuli', 'Vayarukettal', 'Kesa dhoomam',
        'Vethukizhi', 'Uluvakizhi', 'Njavara kizhi',
        'Anjanam', 'Nasa dhumam'
    ];

    const extraTreatments = [
        { name: 'Podikizhi', price: '₹600' },
        { name: 'Vethukizhi', price: '₹500' },
        { name: 'Njavarakizhi', price: '₹800' },
        { name: 'Uluvakizhi', price: '₹600' },
        { name: 'Steam bath', price: '₹50' },
        { name: 'Shirodhara (Kashayam)', price: '₹1,000' },
        { name: 'Sarvangadhara (Kashayam)', price: '₹1,200' },
        { name: 'Ksheeradhara', price: '₹2,000' },
        { name: 'Netradhara', price: '₹500' },
        { name: 'Avagaham', price: '₹200' },
        { name: 'Lepam', price: '₹100' },
        { name: 'Upanaham', price: '₹300' },
        { name: 'Vasti', price: '₹500 (excluding oil charge)' },
    ];

    const facilities = [
        '24 hours purified drinking water',
        'Internet access available for patients and bystanders',
        'Well-stocked in-house pharmacy',
        'Kitchen with nutritious food',
        'Waiting area',
        'Laundry facility',
        'Ample parking',
        'Well-equipped treatment rooms'
    ];

    const PricingTable = ({ title, data }) => (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="bg-green-50 px-6 py-4 border-b border-green-100">
                <h4 className="text-lg font-bold text-green-800">{title}</h4>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                    {data.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                            <span className="text-gray-600 font-medium">{item.duration}</span>
                            <span className="text-green-600 font-bold">{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Header */}
            <div className="bg-green-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Post Natal Care Packages</h1>
                    <p className="text-green-100 text-lg max-w-2xl mx-auto">Comprehensive care for mother and baby with authentic Ayurvedic treatments</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Package Includes */}
                <section className="mb-16">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Check className="w-6 h-6 text-green-500" />
                            Package Includes
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {commonIncludes.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Sections Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Classic Package */}
                    <div className="bg-white rounded-3xl shadow-lg border-t-4 border-green-500 overflow-hidden">
                        <div className="p-8 bg-green-50/50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Classic Package</h3>
                            <p className="text-gray-600 mb-6">Essential traditional care for recovery</p>

                            <div className="mb-6">
                                <h4 className="font-bold text-gray-900 mb-3">Treatments Included:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {classicTreatments.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-white border border-green-100 rounded-full text-xs font-medium text-green-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <PricingTable
                                title="Admit (Non A/C)"
                                data={[
                                    { duration: '7 days', price: '₹11,900' },
                                    { duration: '14 days', price: '₹23,800' },
                                    { duration: '21 days', price: '₹35,700' },
                                    { duration: '28 days', price: '₹44,800' },
                                    { duration: '30 days', price: '₹48,000' },
                                    { duration: '40 days', price: '₹64,000' },
                                ]}
                            />
                            <PricingTable
                                title="Admit (A/C)"
                                data={[
                                    { duration: '7 days', price: '₹14,000' },
                                    { duration: '14 days', price: '₹28,000' },
                                    { duration: '21 days', price: '₹42,000' },
                                    { duration: '28 days', price: '₹53,200' },
                                    { duration: '30 days', price: '₹57,000' },
                                    { duration: '40 days', price: '₹76,000' },
                                ]}
                            />
                            <PricingTable
                                title="OP Service"
                                data={[
                                    { duration: '7 days', price: '₹7,000' },
                                    { duration: '14 days', price: '₹14,000' },
                                    { duration: '21 days', price: '₹21,000' },
                                    { duration: '28 days', price: '₹28,000' },
                                    { duration: '30 days', price: '₹30,000' },
                                    { duration: '40 days', price: '₹40,000' },
                                ]}
                            />
                            <div className="bg-green-50 p-4 rounded-xl text-sm text-green-800 font-medium text-center">
                                Complimentary: Anjanam, Nasa Dhumam, Baby treatments
                            </div>
                        </div>
                    </div>

                    {/* Premium Package */}
                    <div className="bg-white rounded-3xl shadow-lg border-t-4 border-yellow-500 overflow-hidden">
                        <div className="p-8 bg-yellow-50/50">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Package</h3>
                                    <p className="text-gray-600 mb-6">Advanced care with extensive treatments</p>
                                </div>
                                <Star className="w-8 h-8 text-yellow-500 fill-current" />
                            </div>

                            <div className="mb-6">
                                <h4 className="font-bold text-gray-900 mb-3">Treatments Included:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {premiumTreatments.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-white border border-yellow-100 rounded-full text-xs font-medium text-yellow-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <PricingTable
                                title="Admit (Non A/C)"
                                data={[
                                    { duration: '7 days', price: '₹14,000' },
                                    { duration: '14 days', price: '₹28,000' },
                                    { duration: '21 days', price: '₹42,000' },
                                    { duration: '28 days', price: '₹56,000' },
                                    { duration: '30 days', price: '₹60,000' },
                                    { duration: '40 days', price: '₹80,000' },
                                ]}
                            />
                            <PricingTable
                                title="Admit (A/C)"
                                data={[
                                    { duration: '7 days', price: '₹16,100' },
                                    { duration: '14 days', price: '₹32,200' },
                                    { duration: '21 days', price: '₹48,300' },
                                    { duration: '28 days', price: '₹64,400' },
                                    { duration: '30 days', price: '₹69,000' },
                                    { duration: '40 days', price: '₹92,000' },
                                ]}
                            />
                            <PricingTable
                                title="OP Service"
                                data={[
                                    { duration: '7 days', price: '₹9,800' },
                                    { duration: '14 days', price: '₹19,600' },
                                    { duration: '21 days', price: '₹27,300' },
                                    { duration: '28 days', price: '₹36,400' },
                                    { duration: '30 days', price: '₹39,000' },
                                    { duration: '40 days', price: '₹52,000' },
                                ]}
                            />
                            <div className="bg-yellow-50 p-4 rounded-xl text-sm text-yellow-800 font-medium text-center">
                                Complimentary: Anjanam, Nasa Dhumam, Baby treatments
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Treatments & Cosmetics */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Treatments with Extra Payment</h3>
                        <div className="space-y-3">
                            {extraTreatments.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                                    <span className="text-gray-600">{item.name}</span>
                                    <span className="font-bold text-green-600">{item.price}</span>
                                </div>
                            ))}
                            <div className="pt-4 mt-4 border-t border-gray-100">
                                <h4 className="text-sm font-bold text-gray-900 mb-2">Additional Packs</h4>
                                <div className="flex justify-between text-sm py-1"><span className="text-gray-600">Body pack</span><span className="font-bold text-green-600">₹200</span></div>
                                <div className="flex justify-between text-sm py-1"><span className="text-gray-600">Face pack</span><span className="font-bold text-green-600">₹50</span></div>
                                <div className="flex justify-between text-sm py-1"><span className="text-gray-600">Hair pack</span><span className="font-bold text-green-600">₹50</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Cosmetic Treatments</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                                <span className="text-gray-700 font-medium">Herbal facial</span>
                                <span className="font-bold text-pink-600">₹700</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                                <span className="text-gray-700 font-medium">Hair treatment</span>
                                <span className="font-bold text-pink-600">₹1,000*</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-[-8px] mb-2">*charges vary based on hair length</p>
                            <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                                <span className="text-gray-700 font-medium">Pedicure</span>
                                <span className="font-bold text-pink-600">₹800</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                                <span className="text-gray-700 font-medium">Manicure</span>
                                <span className="font-bold text-pink-600">₹600</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Home Service Section */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <Home className="w-8 h-8" />
                                <h2 className="text-3xl font-serif font-bold">Home Service Treatments</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Classic Home */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold mb-4">Classic Home Service</h3>
                                    <div className="text-sm text-blue-100 mb-6 space-y-1">
                                        <p>Includes: Head massage, Face massage, Body massage, Hair pack, Face pack, Body pack, Vethukuli, Vayarukettal</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between"><span className="opacity-80">7 days</span><span className="font-bold">₹10,500</span></div>
                                        <div className="flex justify-between"><span className="opacity-80">14 days</span><span className="font-bold">₹21,000</span></div>
                                        <div className="flex justify-between"><span className="opacity-80">21 days</span><span className="font-bold">₹31,500</span></div>
                                        <div className="flex justify-between"><span className="opacity-80">28 days</span><span className="font-bold">₹42,000</span></div>
                                        <div className="flex justify-between"><span className="opacity-80">30 days</span><span className="font-bold">₹45,000</span></div>
                                    </div>
                                </div>

                                {/* Premium Home */}
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <h3 className="text-xl font-bold mb-4">Premium Home Service</h3>
                                    <div className="text-sm text-blue-100 mb-6 space-y-1">
                                        <p>Includes all Classic treatments + Kesa dhoomam, Vethukizhi, Uluvakizhi, Njavara kizhi</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between"><span className="opacity-80">7 days</span><span className="font-bold">₹12,600</span></div>
                                        <div className="flex justify-between"><span className="opacity-80">14 days</span><span className="font-bold">₹25,200</span></div>
                                        <div className="flex justify-between"><span className="opacity-80">21 days</span><span className="font-bold">₹38,800</span></div>
                                        <div className="flex justify-between"><span className="opacity-80">28 days</span><span className="font-bold">₹50,400</span></div>
                                        <div className="flex justify-between"><span className="opacity-80">30 days</span><span className="font-bold">₹54,000</span></div>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-6 text-sm opacity-70 italic text-center">* Travel allowance extra for home service</p>
                        </div>
                    </div>
                </section>

                {/* Facilities & Quote */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Facilities</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {facilities.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-emerald-900 rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="relative z-10">
                            {/* <h3 className="text-xl font-serif font-bold mb-6 opacity-90">Ayurveda Quote</h3> */}
                            <blockquote className="font-serif text-lg leading-relaxed mb-6 italic opacity-90">
                                “Life (Ayu) is a combination of body, senses, mind and reincarnating soul.
                                Ayurveda is the most sacred science of life, beneficial to humans both in this world and the world beyond.”
                            </blockquote>
                            <div className="flex items-center gap-2 opacity-75">
                                <div className="w-8 h-[1px] bg-white"></div>
                                <span className="text-sm uppercase tracking-wider">Charakacharya</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

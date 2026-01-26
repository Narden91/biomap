import React from 'react';

const PageHeader = ({ title, subtitle, icon: Icon }) => {
    return (
        <div className="bg-sage-50 border-b border-sage-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-2">
                    {Icon && (
                        <div className="p-2 bg-white rounded-lg shadow-sm border border-sage-100">
                            <Icon className="h-8 w-8 text-sage-500" />
                        </div>
                    )}
                    <h1 className="text-4xl font-display font-bold text-sage-900">{title}</h1>
                </div>
                {subtitle && <p className="text-xl text-sage-600 max-w-3xl mt-2">{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;

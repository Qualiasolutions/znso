'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Upload, FileText, X } from 'lucide-react';

type Department = 'architectural' | 'interior' | null;
type ProjectType = 'commercial' | 'residential' | null;
type ResidentialStatus = 'existing' | 'new' | null;
type ExistingType = 'demolishment' | 'refurbishment' | null;
type HasTechnicalDesign = 'yes' | 'no' | null;

const plotSizes = [
    'Below 375m²',
    '400m²',
    '500m²',
    '600m²',
    '750m²',
    '1000m²',
];

export function ContactForm() {
    const [department, setDepartment] = useState<Department>(null);
    const [projectType, setProjectType] = useState<ProjectType>(null);
    const [residentialStatus, setResidentialStatus] = useState<ResidentialStatus>(null);
    const [existingType, setExistingType] = useState<ExistingType>(null);
    const [plotSize, setPlotSize] = useState<string>('');
    const [hasTechnicalDesign, setHasTechnicalDesign] = useState<HasTechnicalDesign>(null);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const resetForm = () => {
        setProjectType(null);
        setResidentialStatus(null);
        setExistingType(null);
        setPlotSize('');
        setHasTechnicalDesign(null);
        setUploadedFile(null);
    };

    const handleDepartmentChange = (dept: Department) => {
        setDepartment(dept);
        resetForm();
    };

    const handleProjectTypeChange = (type: ProjectType) => {
        setProjectType(type);
        setResidentialStatus(null);
        setExistingType(null);
        setHasTechnicalDesign(null);
        setUploadedFile(null);
    };

    const handleResidentialStatusChange = (status: ResidentialStatus) => {
        setResidentialStatus(status);
        setExistingType(null);
        setHasTechnicalDesign(null);
        setUploadedFile(null);
    };

    const handleTechnicalDesignChange = (value: HasTechnicalDesign) => {
        setHasTechnicalDesign(value);
        setUploadedFile(null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            setUploadedFile(file);
        }
    };

    const removeFile = () => {
        setUploadedFile(null);
    };

    // Generate email subject based on selections
    const getEmailSubject = () => {
        if (department === 'architectural') {
            return `ZNSO Inquiry - Architectural: ${projectType || 'General'}`;
        }
        return `ZNSO Inquiry - Interior Design: ${projectType || 'General'}`;
    };

    // Check if form is ready to submit for Interior Design
    const isInteriorFormComplete = () => {
        if (!projectType) return false;
        if (projectType === 'residential' && !residentialStatus) return false;
        if (!hasTechnicalDesign) return false;
        if (hasTechnicalDesign === 'yes' && !uploadedFile) return false;
        return true;
    };

    return (
        <section className="py-20 container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-12"
                >
                    <div className="mb-10">
                        <h2 className="text-3xl font-light mb-4">Request a Consultation</h2>
                        <p className="text-white/60 font-light">Select your department and tell us about your project.</p>
                    </div>

                    <form
                        action="https://formsubmit.co/info@znsoarchitects.com"
                        method="POST"
                        encType="multipart/form-data"
                        className="space-y-8"
                    >
                        {/* FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value={getEmailSubject()} />
                        <input type="hidden" name="_next" value="https://znsoarchitects.com/contact?submitted=true" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />

                        {/* Hidden fields for button selections */}
                        <input type="hidden" name="Department" value={department || ''} />
                        <input type="hidden" name="Project Type" value={projectType || ''} />
                        <input type="hidden" name="Project Status" value={residentialStatus || ''} />
                        <input type="hidden" name="Work Type" value={existingType || ''} />
                        <input type="hidden" name="Plot Size" value={plotSize} />
                        <input type="hidden" name="Has Technical Design" value={hasTechnicalDesign || ''} />

                        {/* Department Selection */}
                        <div className="space-y-4">
                            <label className="text-xs uppercase tracking-widest text-white/60">Select Department</label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => handleDepartmentChange('architectural')}
                                    className={cn(
                                        'p-6 rounded-2xl border transition-all duration-300 text-left',
                                        department === 'architectural'
                                            ? 'bg-white/15 border-white/40 shadow-lg'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                    )}
                                >
                                    <div className="text-lg font-light mb-1">Architectural</div>
                                    <div className="text-xs text-white/50">Buildings & Structures</div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleDepartmentChange('interior')}
                                    className={cn(
                                        'p-6 rounded-2xl border transition-all duration-300 text-left',
                                        department === 'interior'
                                            ? 'bg-white/15 border-white/40 shadow-lg'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                    )}
                                >
                                    <div className="text-lg font-light mb-1">Interior Design</div>
                                    <div className="text-xs text-white/50">Spaces & Interiors</div>
                                </button>
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {department && (
                                <motion.div
                                    key={department}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    {/* Basic Info - Both Departments */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-white/60">First Name</label>
                                            <input
                                                type="text"
                                                name="First Name"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-white/60">Family Name</label>
                                            <input
                                                type="text"
                                                name="Family Name"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-white/60">Contact Number</label>
                                            <input
                                                type="tel"
                                                name="Contact Number"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-white/60">Area</label>
                                            <input
                                                type="text"
                                                name="Area"
                                                placeholder="e.g., Salmiya, Kuwait City"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                                            />
                                        </div>
                                    </div>

                                    {/* Architectural Department Flow */}
                                    {department === 'architectural' && (
                                        <>
                                            {/* Project Type Selection */}
                                            <div className="space-y-4">
                                                <label className="text-xs uppercase tracking-widest text-white/60">Project Type</label>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleProjectTypeChange('commercial')}
                                                        className={cn(
                                                            'p-4 rounded-xl border transition-all duration-300',
                                                            projectType === 'commercial'
                                                                ? 'bg-white/15 border-white/40'
                                                                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                        )}
                                                    >
                                                        Commercial
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleProjectTypeChange('residential')}
                                                        className={cn(
                                                            'p-4 rounded-xl border transition-all duration-300',
                                                            projectType === 'residential'
                                                                ? 'bg-white/15 border-white/40'
                                                                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                        )}
                                                    >
                                                        Residential
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Residential Status */}
                                            <AnimatePresence mode="wait">
                                                {projectType === 'residential' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-4 overflow-hidden"
                                                    >
                                                        <label className="text-xs uppercase tracking-widest text-white/60">Project Status</label>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <button
                                                                type="button"
                                                                onClick={() => handleResidentialStatusChange('existing')}
                                                                className={cn(
                                                                    'p-4 rounded-xl border transition-all duration-300',
                                                                    residentialStatus === 'existing'
                                                                        ? 'bg-white/15 border-white/40'
                                                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                                )}
                                                            >
                                                                Existing
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleResidentialStatusChange('new')}
                                                                className={cn(
                                                                    'p-4 rounded-xl border transition-all duration-300',
                                                                    residentialStatus === 'new'
                                                                        ? 'bg-white/15 border-white/40'
                                                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                                )}
                                                            >
                                                                New
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Existing Property Type (Demolishment/Refurbishment) */}
                                            <AnimatePresence mode="wait">
                                                {residentialStatus === 'existing' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-4 overflow-hidden"
                                                    >
                                                        <label className="text-xs uppercase tracking-widest text-white/60">Work Type</label>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <button
                                                                type="button"
                                                                onClick={() => setExistingType('demolishment')}
                                                                className={cn(
                                                                    'p-4 rounded-xl border transition-all duration-300',
                                                                    existingType === 'demolishment'
                                                                        ? 'bg-white/15 border-white/40'
                                                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                                )}
                                                            >
                                                                Demolishment
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => setExistingType('refurbishment')}
                                                                className={cn(
                                                                    'p-4 rounded-xl border transition-all duration-300',
                                                                    existingType === 'refurbishment'
                                                                        ? 'bg-white/15 border-white/40'
                                                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                                )}
                                                            >
                                                                Refurbishment
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Plot Size - Shows for Commercial, or Residential with status selected */}
                                            <AnimatePresence mode="wait">
                                                {(projectType === 'commercial' ||
                                                  (projectType === 'residential' && residentialStatus === 'new') ||
                                                  (projectType === 'residential' && residentialStatus === 'existing' && existingType)) && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-4 overflow-hidden"
                                                    >
                                                        <label className="text-xs uppercase tracking-widest text-white/60">Plot Size</label>
                                                        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                                                            {plotSizes.map((size) => (
                                                                <button
                                                                    key={size}
                                                                    type="button"
                                                                    onClick={() => setPlotSize(size)}
                                                                    className={cn(
                                                                        'p-3 rounded-xl border transition-all duration-300 text-sm',
                                                                        plotSize === size
                                                                            ? 'bg-white/15 border-white/40'
                                                                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                                    )}
                                                                >
                                                                    {size}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Submit Button for Architectural */}
                                            <AnimatePresence mode="wait">
                                                {(projectType === 'commercial' ||
                                                  (projectType === 'residential' && residentialStatus === 'new') ||
                                                  (projectType === 'residential' && residentialStatus === 'existing' && existingType)) && plotSize && (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                    >
                                                        <Button type="submit" className="w-full md:w-auto mt-4">Submit Request</Button>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    )}

                                    {/* Interior Design Department Flow */}
                                    {department === 'interior' && (
                                        <>
                                            {/* Project Type Selection */}
                                            <div className="space-y-4">
                                                <label className="text-xs uppercase tracking-widest text-white/60">Project Type</label>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleProjectTypeChange('commercial')}
                                                        className={cn(
                                                            'p-4 rounded-xl border transition-all duration-300',
                                                            projectType === 'commercial'
                                                                ? 'bg-white/15 border-white/40'
                                                                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                        )}
                                                    >
                                                        Commercial
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleProjectTypeChange('residential')}
                                                        className={cn(
                                                            'p-4 rounded-xl border transition-all duration-300',
                                                            projectType === 'residential'
                                                                ? 'bg-white/15 border-white/40'
                                                                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                        )}
                                                    >
                                                        Residential
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Residential Status for Interior */}
                                            <AnimatePresence mode="wait">
                                                {projectType === 'residential' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-4 overflow-hidden"
                                                    >
                                                        <label className="text-xs uppercase tracking-widest text-white/60">Project Status</label>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <button
                                                                type="button"
                                                                onClick={() => handleResidentialStatusChange('existing')}
                                                                className={cn(
                                                                    'p-4 rounded-xl border transition-all duration-300',
                                                                    residentialStatus === 'existing'
                                                                        ? 'bg-white/15 border-white/40'
                                                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                                )}
                                                            >
                                                                Existing
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleResidentialStatusChange('new')}
                                                                className={cn(
                                                                    'p-4 rounded-xl border transition-all duration-300',
                                                                    residentialStatus === 'new'
                                                                        ? 'bg-white/15 border-white/40'
                                                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                                )}
                                                            >
                                                                New
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Technical Architecture Design Question */}
                                            <AnimatePresence mode="wait">
                                                {(projectType === 'commercial' || (projectType === 'residential' && residentialStatus)) && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-4 overflow-hidden"
                                                    >
                                                        <label className="text-xs uppercase tracking-widest text-white/60">
                                                            Do you have technical architecture design ready?
                                                        </label>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <button
                                                                type="button"
                                                                onClick={() => handleTechnicalDesignChange('yes')}
                                                                className={cn(
                                                                    'p-4 rounded-xl border transition-all duration-300',
                                                                    hasTechnicalDesign === 'yes'
                                                                        ? 'bg-white/15 border-white/40'
                                                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                                )}
                                                            >
                                                                Yes
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleTechnicalDesignChange('no')}
                                                                className={cn(
                                                                    'p-4 rounded-xl border transition-all duration-300',
                                                                    hasTechnicalDesign === 'no'
                                                                        ? 'bg-white/15 border-white/40'
                                                                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                                )}
                                                            >
                                                                No
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* PDF Upload */}
                                            <AnimatePresence mode="wait">
                                                {hasTechnicalDesign === 'yes' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-4 overflow-hidden"
                                                    >
                                                        <label className="text-xs uppercase tracking-widest text-white/60">
                                                            Upload Technical Design (PDF)
                                                        </label>

                                                        {!uploadedFile ? (
                                                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-2xl cursor-pointer hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                    <Upload className="w-8 h-8 mb-2 text-white/40" />
                                                                    <p className="text-sm text-white/60">
                                                                        <span className="font-medium text-white/80">Click to upload</span> or drag and drop
                                                                    </p>
                                                                    <p className="text-xs text-white/40 mt-1">PDF files only</p>
                                                                </div>
                                                                <input
                                                                    type="file"
                                                                    name="Technical Design PDF"
                                                                    accept=".pdf,application/pdf"
                                                                    onChange={handleFileChange}
                                                                    className="hidden"
                                                                />
                                                            </label>
                                                        ) : (
                                                            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/20 rounded-2xl">
                                                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                                                    <FileText className="w-6 h-6 text-white/70" />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-sm font-medium truncate">{uploadedFile.name}</p>
                                                                    <p className="text-xs text-white/50">
                                                                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                                                                    </p>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    onClick={removeFile}
                                                                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                                                                >
                                                                    <X className="w-5 h-5 text-white/60" />
                                                                </button>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Submit Button for Interior - shows when No is selected OR when file is uploaded */}
                                            <AnimatePresence mode="wait">
                                                {(hasTechnicalDesign === 'no' || (hasTechnicalDesign === 'yes' && uploadedFile)) && (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                    >
                                                        <Button type="submit" className="w-full md:w-auto mt-4">Submit Request</Button>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>

                {/* Info & Consultation Card */}
                <div className="lg:col-span-2 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-light mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Email</div>
                                    <a href="mailto:Info@znsoarchitects.com" className="text-lg font-light hover:text-white/80 transition-colors">Info@znsoarchitects.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Phone</div>
                                    <div className="flex flex-col">
                                        <a href="tel:+96595559313" className="text-lg font-light hover:text-white/80 transition-colors">+965 9555 9313</a>
                                        <a href="tel:+96595556597" className="text-lg font-light hover:text-white/80 transition-colors">+965 9555 6597</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Office</div>
                                    <p className="text-lg font-light leading-relaxed">
                                        Building 18A, Salhiya Street, Jibla<br />
                                        Kuwait City, Kuwait
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gradient-to-br from-white/10 to-black/40 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-light mb-4">What to Expect</h3>
                        <p className="text-white/70 font-light mb-6 leading-relaxed">
                            Our initial consultation is a collaborative session to understand your vision, requirements, and site potential.
                        </p>
                        <ul className="space-y-3">
                            {['Project Feasibility Assessment', 'Design Vision Discussion', 'Budget & Timeline Planning', 'Process Overview'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/80 font-light">
                                    <span className="text-white/40">→</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

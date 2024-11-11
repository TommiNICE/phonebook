/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Trash2, Edit2, Copy, Plus, Save, X } from 'lucide-react';
import PropTypes from 'prop-types';

const Person = ({ person, deletePerson, updateNumber, persons }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalName, setModalName] = useState(person.name);
    const [modalNumber, setModalNumber] = useState(person.number);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateNumber(person.id, modalNumber);
        closeModal();
    };


    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Number copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <>
            <tr key={person.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">{person.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">{person.number}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex gap-2">
                    <button 
                    onClick={() => deletePerson(person.id)}
                    className="text-red-600 hover:text-red-900"
                    title="Delete">
                        <Trash2 size={20} />
                    </button>
                    <button onClick={openModal}
                    className="text-blue-600 hover:text-blue-900"
                    title="Edit">
                        <Edit2 size={20} />
                    </button>
                    <button onClick={() => copyToClipboard(person.number)}
                    className="text-indigo-600 hover:text-indigo-900"
                    title="Copy number">
                        <Copy size={20} />
                    </button>
                    </div>
                    
                </td>
            </tr>
            {persons.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                    No contacts yet. Add your first contact above.
                  </td>
                </tr>
              )}

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-xl mb-4">Update Information</h2>
                        <form onSubmit={handleUpdate}>
                            <div>
                                <p>Name:</p>
                                <input value={modalName} onChange={(e) => setModalName(e.target.value)} className="w-full my-[2px] py-[10px] rounded-lg border-2" />
                            </div>
                            <div>
                                <p>Number:</p>
                                <input value={modalNumber} onChange={(e) => setModalNumber(e.target.value)} className="w-full my-[2px] py-[10px] rounded-lg border-2" />
                            </div>
                            <div className="flex justify-end mt-4">
                                <button type="button" onClick={closeModal} className="px-[20px] py-[10px] mr-2 border border-gray-600 bg-gray-600 hover:bg-gray-400 text-white rounded-lg">
                                    Cancel
                                </button>
                                <button type="submit" className="px-[20px] py-[10px] border border-blue-600 bg-blue-600 hover:bg-green-400 text-white rounded-lg">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

Person.propTypes = {
    persons: PropTypes.array.isRequired,
    person: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    deletePerson: PropTypes.func.isRequired,
    updateNumber: PropTypes.func.isRequired,
};

export default Person;
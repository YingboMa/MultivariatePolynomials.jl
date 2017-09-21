var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#MultivariatePolynomials-1",
    "page": "Introduction",
    "title": "MultivariatePolynomials",
    "category": "section",
    "text": "MultivariatePolynomials.jl is an implementation independent library for manipulating multivariate polynomials. It defines abstract types and an API for multivariate monomials, terms, polynomials and gives default implementation for common operations on them using the API.On the one hand, This packages allows you to implement algorithms on multivariate polynomials that will be independant on the representation of the polynomial that will be chosen by the user. On the other hand, it allows the user to easily switch between different representations of polynomials to see which one is faster for the algorithm that he is using.Supported operations are : basic arithmetic, rational polynomials, evaluation/substitution, differentiation and division.The following packages provide representations of multivariate polynomials that implement the interface:TypedPolynomials : Commutative polynomials of arbitrary coefficient types\nDynamicPolynomials : Commutative and non-commutative polynomials of arbitrary coefficient typesThe following packages extend the interface and/or implement algorithms using the interface:SemialgebraicSets : Sets defined by inequalities and equalities between polynomials and algorithms for solving polynomial systems of equations.\nHomotopyContinuation : Solving systems of polynomials via homotopy continuation.\nMultivariateMoments : Moments of multivariate measures and their scalar product with polynomials.\nPolyJuMP : A JuMP extension for Polynomial Optimization.\nSumOfSquares : Certifying the nonnegativity of polynomials, minimizing/maximizing polynomials and optimization over sum of squares polynomials using Sum of Squares Programming."
},

{
    "location": "index.html#Contents-1",
    "page": "Introduction",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\"types.md\", \"substitution.md\", \"differentiation.md\", \"division.md\"]\nDepth = 3"
},

{
    "location": "types.html#",
    "page": "Types",
    "title": "Types",
    "category": "page",
    "text": "CurrentModule = MultivariatePolynomials"
},

{
    "location": "types.html#Types-1",
    "page": "Types",
    "title": "Types",
    "category": "section",
    "text": ""
},

{
    "location": "types.html#MultivariatePolynomials.AbstractVariable",
    "page": "Types",
    "title": "MultivariatePolynomials.AbstractVariable",
    "category": "Type",
    "text": "AbstractVariable <: AbstractMonomialLike\n\nAbstract type for a variable.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.variable",
    "page": "Types",
    "title": "MultivariatePolynomials.variable",
    "category": "Function",
    "text": "variable(p::AbstractPolynomialLike)\n\nConverts p to a variable. Throws an error if it is not possible.\n\nExamples\n\nCalling variable(x^2 + x - x^2) should return the variable x and calling variable(1.0y) should return the variable y however calling variable(2x) or variable(x + y) should throw an error.\n\nNote\n\nThis operation is not type stable for the TypedPolynomials implementation if nvariables(p) > 1 but is type stable for DynamicPolynomials.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.name",
    "page": "Types",
    "title": "MultivariatePolynomials.name",
    "category": "Function",
    "text": "name(v::AbstractVariable)::AbstractString\n\nReturns the name of a variable.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.similarvariable",
    "page": "Types",
    "title": "MultivariatePolynomials.similarvariable",
    "category": "Function",
    "text": "similarvariable(p::AbstractPolynomialLike, variable::Type{Val{V}})\n\nCreates a new variable V based upon the the given source polynomial.\n\nsimilarvariable(p::AbstractPolynomialLike, v::Symbol)\n\nCreates a new variable based upon the given source polynomial and the given symbol v. Note that this can lead to type instabilities.\n\nExamples\n\nCalling similarvariable(typedpoly, Val{:x}) on a polynomial created with TypedPolynomials results in TypedPolynomials.Variable{:x}.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.@similarvariable",
    "page": "Types",
    "title": "MultivariatePolynomials.@similarvariable",
    "category": "Macro",
    "text": "@similarvariable(p::AbstractPolynomialLike, variable)\n\nCalls similarvariable(p, Val{variable}) and binds the result to a variable with the same name.\n\nExamples\n\nCalling @similarvariable typedpoly x on a polynomial created with TypedPolynomials binds TypedPolynomials.Variable{:x} to the variable x.\n\n\n\n"
},

{
    "location": "types.html#Variables-1",
    "page": "Types",
    "title": "Variables",
    "category": "section",
    "text": "AbstractVariable\nvariable\nname\nsimilarvariable\n@similarvariable"
},

{
    "location": "types.html#MultivariatePolynomials.AbstractMonomialLike",
    "page": "Types",
    "title": "MultivariatePolynomials.AbstractMonomialLike",
    "category": "Type",
    "text": "AbstractMonomialLike\n\nAbstract type for a value that can act like a monomial. For instance, an AbstractVariable is an AbstractMonomialLike since it can act as a monomial of one variable with degree 1.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.AbstractMonomial",
    "page": "Types",
    "title": "MultivariatePolynomials.AbstractMonomial",
    "category": "Type",
    "text": "AbstractMonomial <: AbstractMonomialLike\n\nAbstract type for a monomial, i.e. a product of variables elevated to a nonnegative integer power.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.monomialtype",
    "page": "Types",
    "title": "MultivariatePolynomials.monomialtype",
    "category": "Function",
    "text": "monomialtype(p::AbstractPolynomialLike)\n\nReturn the type of the monomials of p.\n\ntermtype(::Type{PT}) where PT<:AbstractPolynomialLike\n\nReturns the type of the monomials of a polynomial of type PT.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.variables",
    "page": "Types",
    "title": "MultivariatePolynomials.variables",
    "category": "Function",
    "text": "variables(p::AbstractPolynomialLike)\n\nReturns the tuple of the variables of p in decreasing order. It could contain variables of zero degree, see the example section.\n\nExamples\n\nCalling variables(x^2*y) should return (x, y) and calling variables(x) should return (x,). Note that the variables of m does not necessarily have nonzero degree. For instance, variables([x^2*y, y*z][1]) is usually (x, y, z) since the two monomials have been promoted to a common type.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.nvariables",
    "page": "Types",
    "title": "MultivariatePolynomials.nvariables",
    "category": "Function",
    "text": "nvariables(p::AbstractPolynomialLike)\n\nReturns the number of variables in p, i.e. length(variables(p)). It could be more than the number of variables with nonzero degree (see the Examples section of variables).\n\nExamples\n\nCalling nvariables(x^2*y) should return at least 2 and calling nvariables(x) should return at least 1.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.exponents",
    "page": "Types",
    "title": "MultivariatePolynomials.exponents",
    "category": "Function",
    "text": "exponents(t::AbstractTermLike)\n\nReturns the exponent of the variables in the monomial of the term t.\n\nExamples\n\nCalling exponents(x^2*y) should return (2, 1).\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.degree",
    "page": "Types",
    "title": "MultivariatePolynomials.degree",
    "category": "Function",
    "text": "degree(t::AbstractTermLike)\n\nReturns the total degree of the monomial of the term t, i.e. sum(exponents(t)).\n\ndegree(t::AbstractTermLike, v::AbstractVariable)\n\nReturns the exponent of the variable v in the monomial of the term t.\n\nExamples\n\nCalling degree(x^2*y) should return 3 which is 2 + 1. Calling degree(x^2*y, x) should return 2 and calling degree(x^2*y, y) should return 1.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.isconstant",
    "page": "Types",
    "title": "MultivariatePolynomials.isconstant",
    "category": "Function",
    "text": "isconstant(t::AbstractTermLike)\n\nReturns whether the monomial of t is constant.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.powers",
    "page": "Types",
    "title": "MultivariatePolynomials.powers",
    "category": "Function",
    "text": "powers(t::AbstractTermLike)\n\nReturns an tuple of the powers of the monomial of t.\n\nExamples\n\nCalling powers(3x^4*y) should return((x, 4), (y, 1))`.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.constantmonomial",
    "page": "Types",
    "title": "MultivariatePolynomials.constantmonomial",
    "category": "Function",
    "text": "constantmonomial(p::AbstractPolynomialType)\n\nReturns a constant monomial of the monomial type of p with the same variables as p.\n\nconstantmonomial(::Type{PT}) where {PT<:AbstractPolynomialType}\n\nReturns a constant monomial of the monomial type of a polynomial of type PT.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.mapexponents",
    "page": "Types",
    "title": "MultivariatePolynomials.mapexponents",
    "category": "Function",
    "text": "mapexponents(f, m1::AbstractMonomialLike, m2::AbstractMonomialLike)\n\nIf m_1 = prod x^alpha_i and m_2 = prod x^beta_i then it returns the monomial m = prod x^f(alpha_i beta_i).\n\nExamples\n\nThe multiplication m1 * m2 is equivalent to mapexponents(+, m1, m2), the unsafe division _div(m1, m2) is equivalent to mapexponents(-, m1, m2), gcd(m1, m2) is equivalent to mapexponents(min, m1, m2), lcm(m1, m2) is equivalent to mapexponents(max, m1, m2).\n\n\n\n"
},

{
    "location": "types.html#Monomials-1",
    "page": "Types",
    "title": "Monomials",
    "category": "section",
    "text": "AbstractMonomialLike\nAbstractMonomial\nmonomialtype\nvariables\nnvariables\nexponents\ndegree\nisconstant\npowers\nconstantmonomial\nmapexponents"
},

{
    "location": "types.html#MultivariatePolynomials.AbstractTermLike",
    "page": "Types",
    "title": "MultivariatePolynomials.AbstractTermLike",
    "category": "Type",
    "text": "AbstractTermLike{T}\n\nAbstract type for a value that can act like a term. For instance, an AbstractMonomial is an AbstractTermLike{Int} since it can act as a term with coefficient 1.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.AbstractTerm",
    "page": "Types",
    "title": "MultivariatePolynomials.AbstractTerm",
    "category": "Type",
    "text": "AbstractTerm{T} <: AbstractTerm{T}\n\nAbstract type for a term of coefficient type T, i.e. the product between a value of type T and a monomial.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.term",
    "page": "Types",
    "title": "MultivariatePolynomials.term",
    "category": "Function",
    "text": "term(p::AbstractPolynomialLike)\n\nConverts the polynomial p to a term. When applied on a polynomial, it throws an error if it has more than one term. When applied to a term, it is the identity and does not copy it. When applied to a monomial, it create a term of type AbstractTerm{Int}.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.termtype",
    "page": "Types",
    "title": "MultivariatePolynomials.termtype",
    "category": "Function",
    "text": "termtype(p::AbstractPolynomialLike)\n\nReturns the type of the terms of p.\n\ntermtype(::Type{PT}) where PT<:AbstractPolynomialLike\n\nReturns the type of the terms of a polynomial of type PT.\n\ntermtype(p::AbstractPolynomialLike, ::Type{T}) where T\n\nReturns the type of the terms of p but with coefficient type T.\n\ntermtype(::Type{PT}, ::Type{T}) where {PT<:AbstractPolynomialLike, T}\n\nReturns the type of the terms of a polynomial of type PT but with coefficient type T.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.coefficient",
    "page": "Types",
    "title": "MultivariatePolynomials.coefficient",
    "category": "Function",
    "text": "coefficient(t::AbstractTermLike)\n\nReturns the coefficient of the term t.\n\ncoefficient(p::AbstractPolynomialLike, m::AbstractMonomialLike)\n\nReturns the coefficient of the monomial m in p.\n\nExamples\n\nCalling coefficient on 4x^2y should return 4. Calling coefficient(2x + 4y^2 + 3, y^2) should return 4. Calling coefficient(2x + 4y^2 + 3, x^2) should return 0.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.coefficienttype",
    "page": "Types",
    "title": "MultivariatePolynomials.coefficienttype",
    "category": "Function",
    "text": "coefficient(p::AbstractPolynomialLike)\n\nReturns the coefficient type of p.\n\ncoefficient(::Type{PT}) where PT\n\nReturns the coefficient type of a polynomial of type PT.\n\nExamples\n\nCalling coefficienttype on (45)x^2y should return Rational{Int}, calling coefficienttype on 10x^2y + 20x should return Float64 and calling coefficienttype on xy should return Int.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.monomial",
    "page": "Types",
    "title": "MultivariatePolynomials.monomial",
    "category": "Function",
    "text": "monomial(t::AbstractTermLike)\n\nReturns the monomial of the term t.\n\nExamples\n\nCalling monomial on 4x^2y should return x^2y.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.constantterm",
    "page": "Types",
    "title": "MultivariatePolynomials.constantterm",
    "category": "Function",
    "text": "constantterm(α, p::AbstractPolynomialLike)\n\nCreates a constant term with coefficient α and the same variables as p.\n\nconstantterm(α, ::Type{PT} where {PT<:AbstractPolynomialType}\n\nCreates a constant term of the term type of a polynomial of type PT.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.zeroterm",
    "page": "Types",
    "title": "MultivariatePolynomials.zeroterm",
    "category": "Function",
    "text": "zeroterm(p::AbstractPolynomialLike{T}) where T\n\nEquivalent to constantterm(zero(T), p).\n\nzeroterm(α, ::Type{PT} where {T, PT<:AbstractPolynomialType{T}}\n\nEquivalent to constantterm(zero(T), PT).\n\n\n\n"
},

{
    "location": "types.html#Terms-1",
    "page": "Types",
    "title": "Terms",
    "category": "section",
    "text": "AbstractTermLike\nAbstractTerm\nterm\ntermtype\ncoefficient\ncoefficienttype\nmonomial\nconstantterm\nzeroterm"
},

{
    "location": "types.html#MultivariatePolynomials.AbstractPolynomialLike",
    "page": "Types",
    "title": "MultivariatePolynomials.AbstractPolynomialLike",
    "category": "Type",
    "text": "AbstractPolynomialLike{T}\n\nAbstract type for a value that can act like a polynomial. For instance, an AbstractTerm{T} is an AbstractPolynomialType{T} since it can act as a polynomial of only one term.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.AbstractPolynomial",
    "page": "Types",
    "title": "MultivariatePolynomials.AbstractPolynomial",
    "category": "Type",
    "text": "AbstractPolynomial{T} <: AbstractPolynomialLike{T}\n\nAbstract type for a polynomial of coefficient type T, i.e. a sum of AbstractTerm{T}s.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.polynomial",
    "page": "Types",
    "title": "MultivariatePolynomials.polynomial",
    "category": "Function",
    "text": "polynomial(p::AbstractPolynomialLike)\n\nConverts p to a value with polynomial type.\n\npolynomial(p::AbstractPolynomialLike, ::Type{T}) where T\n\nConverts p to a value with polynomial type with coefficient type T.\n\npolynomial(a::AbstractVector, mv::AbstractVector{<:AbstractMonomialLike})\n\nCreates a polynomial equal to dot(a, mv).\n\npolynomial(terms::AbstractVector{<:AbstractTerm}, s::ListState=MessyState())\n\nCreates a polynomial equal to sum(terms) where terms are guaranteed to be in state s.\n\npolynomial(f::Function, mv::AbstractVector{<:AbstractMonomialLike})\n\nCreates a polynomial equal to sum(f(i) * mv[i] for i in 1:length(mv)).\n\nExamples\n\nCalling polynomial([2, 4, 1], [x, x^2*y, x*y]) should return 4x^2y + xy + 2x.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.polynomialtype",
    "page": "Types",
    "title": "MultivariatePolynomials.polynomialtype",
    "category": "Function",
    "text": "polynomialtype(p::AbstractPolynomialLike)\n\nReturns the type that p would have if it was converted into a polynomial.\n\npolynomialtype(::Type{PT}) where PT<:AbstractPolynomialLike\n\nReturns the same as polynomialtype(::PT).\n\npolynomialtype(p::AbstractPolynomialLike, ::Type{T}) where T\n\nReturns the type that p would have if it was converted into a polynomial of coefficient type T.\n\ntermtype(::Type{PT}, ::Type{T}) where {PT<:AbstractPolynomialLike, T}\n\nReturns the same as polynomialtype(::PT, ::Type{T}).\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.terms",
    "page": "Types",
    "title": "MultivariatePolynomials.terms",
    "category": "Function",
    "text": "terms(p::AbstractPolynomialLike)\n\nReturns an iterator over the nonzero terms of the polynomial p sorted in the decreasing monomial order.\n\nExamples\n\nCalling terms on 4x^2y + xy + 2x should return an iterator of 4x^2y xy 2x.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.nterms",
    "page": "Types",
    "title": "MultivariatePolynomials.nterms",
    "category": "Function",
    "text": "nterms(p::AbstractPolynomialLike)\n\nReturns the number of nonzero terms in p, i.e. length(terms(p)).\n\nExamples\n\nCalling nterms on 4x^2y + xy + 2x should return 3.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.coefficients",
    "page": "Types",
    "title": "MultivariatePolynomials.coefficients",
    "category": "Function",
    "text": "coefficients(p::AbstractPolynomialLike)\n\nReturns an iterator over the coefficients of p of the nonzero terms of the polynomial sorted in the decreasing monomial order.\n\ncoefficients(p::AbstractPolynomialLike, X::AbstractVector)\n\nReturns an iterator over the coefficients of the monomials of X in p where X is a monomial vector not necessarily sorted but with no duplicate entry.\n\nExamples\n\nCalling coefficients on 4x^2y + xy + 2x should return an iterator of 4 1 2. Calling coefficients(4x^2*y + x*y + 2x + 3, [x, 1, x*y, y]) should return an iterator of 2 3 1 0.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.monomials",
    "page": "Types",
    "title": "MultivariatePolynomials.monomials",
    "category": "Function",
    "text": "monomials(p::AbstractPolynomialLike)\n\nReturns an iterator over the monomials of p of the nonzero terms of the polynomial sorted in the decreasing order.\n\nmonomials(vars::Tuple, degs::AbstractVector{Int}, filter::Function = m -> true)\n\nBuilds the vector of all the monovec m with variables vars such that the degree degree(m) is in degs and filter(m) is true.\n\nExamples\n\nCalling monomials on 4x^2y + xy + 2x should return an iterator of x^2y xy x.\n\nCalling monomials((x, y), [1, 3], m -> degree(m, y) != 1) should return [x^3, x*y^2, y^3, x] where x^2*y and y have been excluded by the filter.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.mindegree",
    "page": "Types",
    "title": "MultivariatePolynomials.mindegree",
    "category": "Function",
    "text": "mindegree(p::Union{AbstractPolynomialLike, AbstractVector{<:AbstractTermLike}})\n\nReturns the minimal total degree of the monomials of p, i.e. minimum(degree, terms(p)).\n\nmindegree(p::Union{AbstractPolynomialLike, AbstractVector{<:AbstractTermLike}}, v::AbstractVariable)\n\nReturns the minimal degree of the monomials of p in the variable v, i.e. minimum(degree.(terms(p), v)).\n\nExamples\n\nCalling mindegree on on 4x^2y + xy + 2x should return 1, mindegree(4x^2y + xy + 2x, x) should return 1 and  mindegree(4x^2y + xy + 2x, y) should return 0.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.maxdegree",
    "page": "Types",
    "title": "MultivariatePolynomials.maxdegree",
    "category": "Function",
    "text": "maxdegree(p::Union{AbstractPolynomialLike, AbstractVector{<:AbstractTermLike}})\n\nReturns the maximal total degree of the monomials of p, i.e. maximum(degree, terms(p)).\n\nmaxdegree(p::Union{AbstractPolynomialLike, AbstractVector{<:AbstractTermLike}}, v::AbstractVariable)\n\nReturns the maximal degree of the monomials of p in the variable v, i.e. maximum(degree.(terms(p), v)).\n\nExamples\n\nCalling maxdegree on on 4x^2y + xy + 2x should return 3, maxdegree(4x^2y + xy + 2x, x) should return 2 and  maxdegree(4x^2y + xy + 2x, y) should return 1.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.extdegree",
    "page": "Types",
    "title": "MultivariatePolynomials.extdegree",
    "category": "Function",
    "text": "extdegree(p::Union{AbstractPolynomialLike, AbstractVector{<:AbstractTermLike}})\n\nReturns the extremal total degrees of the monomials of p, i.e. (mindegree(p), maxdegree(p)).\n\nextdegree(p::Union{AbstractPolynomialLike, AbstractVector{<:AbstractTermLike}}, v::AbstractVariable)\n\nReturns the extremal degrees of the monomials of p in the variable v, i.e. (mindegree(p, v), maxdegree(p, v)).\n\nExamples\n\nCalling extdegree on on 4x^2y + xy + 2x should return (1, 3), extdegree(4x^2y + xy + 2x, x) should return (1, 2) and  maxdegree(4x^2y + xy + 2x, y) should return (0, 1).\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.leadingterm",
    "page": "Types",
    "title": "MultivariatePolynomials.leadingterm",
    "category": "Function",
    "text": "leadingterm(p::AbstractPolynomialLike)\n\nReturns the coefficient of the leading term, i.e. first(terms(p)).\n\nExamples\n\nCalling leadingterm on 4x^2y + xy + 2x should return 4x^2y.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.leadingcoefficient",
    "page": "Types",
    "title": "MultivariatePolynomials.leadingcoefficient",
    "category": "Function",
    "text": "leadingcoefficient(p::AbstractPolynomialLike)\n\nReturns the coefficient of the leading term of p, i.e. coefficient(leadingterm(p)).\n\nExamples\n\nCalling leadingcoefficient on 4x^2y + xy + 2x should return 4 and calling it on 0 should return 0.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.leadingmonomial",
    "page": "Types",
    "title": "MultivariatePolynomials.leadingmonomial",
    "category": "Function",
    "text": "leadingmonomial(p::AbstractPolynomialLike)\n\nReturns the monomial of the leading term of p, i.e. monomial(leadingterm(p)) or first(monomials(p)).\n\nExamples\n\nCalling leadingmonomial on 4x^2y + xy + 2x should return x^2y.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.removeleadingterm",
    "page": "Types",
    "title": "MultivariatePolynomials.removeleadingterm",
    "category": "Function",
    "text": "removeleadingterm(p::AbstractPolynomialLike)\n\nReturns a polynomial with the leading term removed in the polynomial p.\n\nExamples\n\nCalling removeleadingterm on 4x^2y + xy + 2x should return xy + 2x.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.removemonomials",
    "page": "Types",
    "title": "MultivariatePolynomials.removemonomials",
    "category": "Function",
    "text": "Returns a polynomial with the terms having their monomial in the monomial vector mv removed in the polynomial p.\n\nExamples\n\nCalling removemonomials(4x^2*y + x*y + 2x, [x*y]) should return 4x^2*y + 2x.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.monic",
    "page": "Types",
    "title": "MultivariatePolynomials.monic",
    "category": "Function",
    "text": "monic(p::AbstractPolynomialLike)\n\nReturns p / leadingcoefficient(p) where the leading coefficient of the returned polynomials is made sure to be exactly one to avoid rounding error.\n\n\n\n"
},

{
    "location": "types.html#Polynomials-1",
    "page": "Types",
    "title": "Polynomials",
    "category": "section",
    "text": "AbstractPolynomialLike\nAbstractPolynomial\npolynomial\npolynomialtype\nterms\nnterms\ncoefficients\nmonomials\nmindegree\nmaxdegree\nextdegree\nleadingterm\nleadingcoefficient\nleadingmonomial\nremoveleadingterm\nremovemonomials\nmonic"
},

{
    "location": "types.html#Rational-Polynomial-Function-1",
    "page": "Types",
    "title": "Rational Polynomial Function",
    "category": "section",
    "text": "A rational polynomial function can be constructed with the / operator. Common operations such as +, -, *, - have been implemented between rational functions. The numerator and denominator polynomials can be retrieved by the numerator and denominator functions."
},

{
    "location": "types.html#MultivariatePolynomials.monovec",
    "page": "Types",
    "title": "MultivariatePolynomials.monovec",
    "category": "Function",
    "text": "monovec(X::AbstractVector{MT}) where {MT<:AbstractMonomialLike}\n\nReturns the vector of monomials X in decreasing order and without any duplicates.\n\nExamples\n\nCalling monovec on xy x xy x^2y x should return x^2y xy x.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.monovectype",
    "page": "Types",
    "title": "MultivariatePolynomials.monovectype",
    "category": "Function",
    "text": "monovectype(X::AbstractVector{MT}) where {MT<:AbstractMonomialLike}\n\nReturns the return type of monovec.\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.emptymonovec",
    "page": "Types",
    "title": "MultivariatePolynomials.emptymonovec",
    "category": "Function",
    "text": "emptymonovec(p::AbstractPolynomialLike)\n\nReturns an empty collection of the type of monomials(p).\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.sortmonovec",
    "page": "Types",
    "title": "MultivariatePolynomials.sortmonovec",
    "category": "Function",
    "text": "sortmonovec(X::AbstractVector{MT}) where {MT<:AbstractMonomialLike}\n\nReturns σ, the orders in which one must take the monomials in X to make them sorted and without any duplicate and the sorted vector of monomials, i.e. it returns (σ, X[σ]).\n\nExamples\n\nCalling sortmonovec on xy x xy x^2y x should return (4 1 2 x^2y xy x).\n\n\n\n"
},

{
    "location": "types.html#MultivariatePolynomials.mergemonovec",
    "page": "Types",
    "title": "MultivariatePolynomials.mergemonovec",
    "category": "Function",
    "text": "mergemonovec{MT<:AbstractMonomialLike, MVT<:AbstractVector{MT}}(X::AbstractVector{MVT}}\n\nReturns the vector of monomials in the entries of X in decreasing order and without any duplicates, i.e. monovec(vcat(X...))\n\nExamples\n\nCalling mergemonovec on xy x xy x^2y x should return x^2y xy x.\n\n\n\n"
},

{
    "location": "types.html#Monomial-Vectors-1",
    "page": "Types",
    "title": "Monomial Vectors",
    "category": "section",
    "text": "monovec\nmonovectype\nemptymonovec\nsortmonovec\nmergemonovec"
},

{
    "location": "substitution.html#",
    "page": "Substitution",
    "title": "Substitution",
    "category": "page",
    "text": ""
},

{
    "location": "substitution.html#MultivariatePolynomials.subs",
    "page": "Substitution",
    "title": "MultivariatePolynomials.subs",
    "category": "Function",
    "text": "subs(p, s::AbstractSubstitution...)\n\nApply the substitutions s to p. Use p(s...) if we are sure that all the variables are substited in s.\n\nThe allowed substutions are:\n\nv => p where v is a variable and p a polynomial, e.g. x => 1 or x => x^2*y + x + y.\nV => P where V is a tuple or vector of variables and P a tuple or vector of polynomials, e.g. (x, y) => (y, x) or (y, x) => (2, 1).\n\nThe order of the variables is lexicographic with the name with TypedPolynomials and by order of creation with DynamicPolynomials. Since there is no guarantee on the order of the variables, substitution directly with a tuple or a vetor is not allowed. You can use p(variables(p) => (1, 2)) instead if you are sure of the order of the variables (e.g. the name order matches the creation order).\n\nExamples\n\np = 3x^2*y + x + 2y + 1\np(x => 2, y => 1) # Return type is Int\nsubs(p, x => 2, y => 1) # Return type is Int in TypedPolynomials but is a polynomial of Int coefficients in DynamicPolynomials\nsubs(p, y => x*y^2 + 1)\np(y => 2) # Do not do that, this works fine with TypedPolynomials but it will not return a correct result with DynamicPolynomials since it thinks that the return type is `Int`.\n\n\n\n"
},

{
    "location": "substitution.html#Subtitution-1",
    "page": "Substitution",
    "title": "Subtitution",
    "category": "section",
    "text": "Given a polynomial, say p(x y) = 3x^2y + x + 2y + 1, one can evaluate it at a given point, e.g. p(2 1) = 12 + 2 + 2 + 1 = 17 or substitute one or more variable by a value or polynomial, e.g. p(x xy^2 + 1) = 3x^2(xy^2+1) + x + 2(xy^2+1) + 1 = 3x^3y^2 + 2xy^2 + 3x^2 + x + 3. We distinguish the two operation as followsWe call an evaluation an operation where every variable should be replace by a new value or polynomial, the syntax is p(x => 2, y => 1).\nWe call a subsitution an operation where some (or all variables) are subtituted into a new value or polynomial, the syntax is subs(p, y => x*y^2 + 1).The distinction is important for type stability for some implementations (it is important for DynamicPolynomials but not for TypedPolynomials). Indeed consider a polynomial with Int coefficients for which we ask to replace some variables with Int values. If all the variables are replaced with Ints, the return type should be Int. However, if some variables only are replaced by Int then the return type should be a polynomial with Int coefficients.subs"
},

{
    "location": "differentiation.html#",
    "page": "Differentiation",
    "title": "Differentiation",
    "category": "page",
    "text": ""
},

{
    "location": "differentiation.html#MultivariatePolynomials.differentiate",
    "page": "Differentiation",
    "title": "MultivariatePolynomials.differentiate",
    "category": "Function",
    "text": "differentiate(p::AbstractPolynomialLike, v::AbstractVariable, deg::Int=1)\n\nDifferentiate deg times the polynomial p by the variable v.\n\ndifferentiate(p::AbstractPolynomialLike, vs, deg::Int=1)\n\nDifferentiate deg times the polynomial p by the variables of the vector or tuple of variable vs and return an array of dimension deg.\n\ndifferentiate(p::AbstractArray{<:AbstractPolynomialLike, N}, vs, deg::Int=1) where N\n\nDifferentiate the polynomials in p by the variables of the vector or tuple of variable vs and return an array of dimension N+deg.\n\nExamples\n\np = 3x^2*y + x + 2y + 1\ndifferentiate(p, x) # should return 6xy + 1\ndifferentiate(p, (x, y)) # should return [6xy+1, 3x^2+1]\n\n\n\n"
},

{
    "location": "differentiation.html#Differentiation-1",
    "page": "Differentiation",
    "title": "Differentiation",
    "category": "section",
    "text": "Given a polynomial, say p(x y) = 3x^2y + x + 2y + 1, we can differentiate it by a variable, say x and get partial p(x y)  partial x = 6xy + 1. We can also differentiate it by both of its variable and get the vector 6xy+1 3x^2+1.differentiate"
},

{
    "location": "division.html#",
    "page": "Division",
    "title": "Division",
    "category": "page",
    "text": ""
},

{
    "location": "division.html#MultivariatePolynomials.divides",
    "page": "Division",
    "title": "MultivariatePolynomials.divides",
    "category": "Function",
    "text": "divides(t1::AbstractTermLike, t2::AbstractTermLike)\n\nReturns whether the monomial of t1 divides the monomial of t2.\n\nExamples\n\nCalling divides(2x^2y, 3xy) should return false because x^2y does not divide xy since x has a degree 2 in x^2y which is greater than the degree of x on xy. However, calling divides(3xy, 2x^2y) should return true.\n\n\n\n"
},

{
    "location": "division.html#Division-1",
    "page": "Division",
    "title": "Division",
    "category": "section",
    "text": "The gcd and lcm functions of Base have been implemented for monomials, you have for example gcd(x^2*y^7*z^3, x^4*y^5*z^2) returning x^2*y^5*z^2 and lcm(x^2*y^7*z^3, x^4*y^5*z^2) returning x^4*y^7*z^3.Given two polynomials, p and d, there are unique r and q such that p = q d + r and the leading term of d does not divide the leading term of r. You can obtain q using the div function and r using the rem function. The divrem function returns (q r).Given a polynomial p and divisors d_1 ldots d_n, one can find r and q_1 ldots q_n such that p = q_1 d_1 + cdots + q_n d_n + r and none of the leading terms of q_1 ldots q_n divide the leading term of r. You can obtain the vector q_1 ldots q_n using div(p, d) where d = d_1 ldots d_n and r using the rem function with the same arguments. The divrem function returns (q r).divides"
},

]}